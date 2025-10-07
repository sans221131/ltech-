// app/api/admin/invoices/route.ts
import { NextRequest, NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import { db, invoices } from "@/db";
import { desc } from "drizzle-orm";
import { randomUUID } from "crypto";

// GET - List all invoices
export async function GET(request: NextRequest) {
  const isAuth = await checkAuth();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const allInvoices = await db
      .select()
      .from(invoices)
      .orderBy(desc(invoices.created_at));

    return NextResponse.json({ invoices: allInvoices });
  } catch (error) {
    console.error("Failed to fetch invoices:", error);
    return NextResponse.json(
      { error: "Failed to fetch invoices" },
      { status: 500 }
    );
  }
}

// POST - Create new invoice
export async function POST(request: NextRequest) {
  const isAuth = await checkAuth();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      customer_name,
      customer_email,
      customer_phone,
      amount_in_paise,
      currency,
      redirect_url,
      description,
    } = body;

    // Validate required fields
    if (!customer_name || !amount_in_paise) {
      return NextResponse.json(
        { error: "Customer name and amount are required" },
        { status: 400 }
      );
    }

    // Validate redirect URL
    if (redirect_url) {
      try {
        new URL(redirect_url);
      } catch {
        return NextResponse.json(
          { error: "Invalid redirect URL" },
          { status: 400 }
        );
      }
    }

    // Generate receipt number (e.g., LW-2025-0001)
    const year = new Date().getFullYear();
    const existingCount = await db
      .select()
      .from(invoices)
      .then((rows) => rows.length);
    const receiptNumber = `LW-${year}-${String(existingCount + 1).padStart(4, "0")}`;

    // Create invoice
    const [newInvoice] = await db
      .insert(invoices)
      .values({
        id: randomUUID(),
        receipt: receiptNumber,
        customer_name,
        customer_email: customer_email || null,
        customer_phone: customer_phone || null,
        amount_in_paise: parseInt(amount_in_paise),
        currency: currency || "INR",
        provider: "mock",
        status: "draft",
        notes: {
          redirect_url: redirect_url || null,
          description: description || null,
        },
      })
      .returning();

    return NextResponse.json({ invoice: newInvoice });
  } catch (error) {
    console.error("Failed to create invoice:", error);
    return NextResponse.json(
      { error: "Failed to create invoice" },
      { status: 500 }
    );
  }
}
