// app/api/invoices/pay/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db, invoices } from "@/db";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { receipt } = await request.json();

    if (!receipt) {
      return NextResponse.json({ error: "Receipt required" }, { status: 400 });
    }

    // Find the invoice
    const [invoice] = await db
      .select()
      .from(invoices)
      .where(eq(invoices.receipt, receipt))
      .limit(1);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    if (invoice.status === "paid") {
      return NextResponse.json({ invoice });
    }

    // Mock payment - just update status to paid
    const [updatedInvoice] = await db
      .update(invoices)
      .set({
        status: "paid",
        updated_at: new Date(),
      })
      .where(eq(invoices.receipt, receipt))
      .returning();

    return NextResponse.json({ invoice: updatedInvoice });
  } catch (error) {
    console.error("Failed to process payment:", error);
    return NextResponse.json(
      { error: "Failed to process payment" },
      { status: 500 }
    );
  }
}
