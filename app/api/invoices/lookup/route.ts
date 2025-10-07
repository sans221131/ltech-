// app/api/invoices/lookup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db, invoices } from "@/db";
import { eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ref = searchParams.get("ref");

  if (!ref) {
    return NextResponse.json({ error: "Reference required" }, { status: 400 });
  }

  try {
    const [invoice] = await db
      .select()
      .from(invoices)
      .where(eq(invoices.receipt, ref))
      .limit(1);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    return NextResponse.json({ invoice });
  } catch (error) {
    console.error("Failed to lookup invoice:", error);
    return NextResponse.json(
      { error: "Failed to lookup invoice" },
      { status: 500 }
    );
  }
}
