// db/seed-invoices.ts
import { config } from "dotenv";

// Load environment variables FIRST before importing db
config({ path: ".env.local" });

import { db, invoices } from "./index";

const randomNames = [
  "Acme Corp",
  "TechStart Inc",
  "Global Solutions Ltd",
  "InnovateLabs",
  "FutureTech Systems",
  "Digital Dynamics",
  "CloudVision Co",
  "DataFlow Industries",
  "NextGen Enterprises",
  "Stellar Technologies",
];

const randomEmails = [
  "finance@acmecorp.com",
  "billing@techstart.io",
  "accounts@globalsolutions.com",
  "payments@innovatelabs.net",
  "admin@futuretech.com",
  "ops@digitaldynamics.io",
  "billing@cloudvision.co",
  "finance@dataflow.tech",
  "accounts@nextgen.com",
  "payments@stellar.tech",
];

const randomPhones = [
  "+1-555-0101",
  "+1-555-0202",
  "+1-555-0303",
  "+1-555-0404",
  "+1-555-0505",
  "+91-98765-43210",
  "+91-87654-32109",
  "+971-50-123-4567",
  "+971-50-987-6543",
  "+1-555-0606",
];

const statuses = ["unpaid", "paid", "draft", "expired", "cancelled"];

const descriptions = [
  "Web Development Services - Q4 2024",
  "Mobile App Development - Phase 1",
  "API Integration Services",
  "Cloud Infrastructure Setup",
  "UI/UX Design Consultation",
  "Database Migration Project",
  "E-commerce Platform Development",
  "Custom CRM Implementation",
  "Payment Gateway Integration",
  "Monthly Maintenance & Support",
];

function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateInvoiceRef(): string {
  const year = new Date().getFullYear();
  const num = Math.floor(Math.random() * 9999)
    .toString()
    .padStart(4, "0");
  return `INV-${year}-${num}`;
}

function generateReceiptRef(): string {
  const year = new Date().getFullYear();
  const num = Math.floor(Math.random() * 9999)
    .toString()
    .padStart(4, "0");
  return `LW-${year}-${num}`;
}

function randomAmount(): number {
  // Random amount between 10,000 and 500,000 paise (₹100 to ₹5,000)
  return Math.floor(Math.random() * 490000) + 10000;
}

async function seedInvoices(count: number = 10) {
  console.log(`🌱 Seeding ${count} random invoices...`);

  const invoiceData = Array.from({ length: count }, (_, i) => ({
    id: crypto.randomUUID(),
    receipt: generateReceiptRef(),
    customer_name: randomElement(randomNames),
    customer_email: randomElement(randomEmails),
    customer_phone: randomElement(randomPhones),
    amount_in_paise: randomAmount(),
    currency: Math.random() > 0.7 ? "AED" : "INR", // 70% INR, 30% AED
    provider: "mock",
    provider_invoice_id: null,
    provider_short_url: null,
    status: randomElement(statuses) as string,
    notes: {
      description: randomElement(descriptions),
      project_id: `PRJ-${Math.floor(Math.random() * 1000)}`,
      terms: "Net 30",
    } as any,
    created_at: new Date(
      Date.now() - Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000)
    ), // Random date within last 90 days
    updated_at: new Date(),
  }));

  try {
    const result = [];
    
    // Insert one by one to avoid timeout with large batch
    for (let i = 0; i < invoiceData.length; i++) {
      const inv = await db.insert(invoices).values(invoiceData[i]).returning();
      result.push(inv[0]);
      process.stdout.write(`\r   Progress: ${i + 1}/${invoiceData.length}`);
    }
    
    console.log(`\n✅ Successfully inserted ${result.length} invoices`);
    
    // Show summary
    console.log("\n📊 Invoice Summary:");
    console.log(`   Unpaid: ${result.filter(i => i.status === "unpaid").length}`);
    console.log(`   Paid: ${result.filter(i => i.status === "paid").length}`);
    console.log(`   Draft: ${result.filter(i => i.status === "draft").length}`);
    console.log(`   Expired: ${result.filter(i => i.status === "expired").length}`);
    console.log(`   Cancelled: ${result.filter(i => i.status === "cancelled").length}`);
    
    console.log("\n📋 Sample invoices:");
    result.slice(0, 3).forEach((inv) => {
      const amount = (inv.amount_in_paise / 100).toFixed(2);
      console.log(`   ${inv.receipt} - ${inv.customer_name} - ${inv.currency} ${amount} - ${inv.status}`);
    });
    
    return result;
  } catch (error) {
    console.error("❌ Error seeding invoices:", error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  const count = parseInt(process.argv[2]) || 10;
  seedInvoices(count)
    .then(() => {
      console.log("\n✨ Seeding complete!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Seeding failed:", err);
      process.exit(1);
    });
}

export { seedInvoices };
