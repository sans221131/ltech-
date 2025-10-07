// src/db/schema.ts
import {
  pgTable,
  uuid,
  text,
  boolean,
  integer,
  timestamp,
  uniqueIndex,
  primaryKey,
  pgEnum,
  index,
  jsonb,
} from "drizzle-orm/pg-core";

// ---------- Enums ----------
export const seoOwner = pgEnum("seo_owner", ["industry", "solution"]);

// ---------- Core ----------
export const industries = pgTable(
  "industries",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    blurb: text("blurb"),
    // optional alias phrases you might later use for KV/Vectorize seeding
    aliases: text("aliases").array(), // keep null = no aliases
    orderIndex: integer("order_index").notNull().default(0),
    isPublished: boolean("is_published").notNull().default(false),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => ({
    slugUq: uniqueIndex("industries_slug_uq").on(t.slug),
    slugIdx: index("industries_slug_idx").on(t.slug),
    industriesOrderIdx: index("industries_order_idx").on(t.orderIndex),
  })
);

export const solutions = pgTable(
  "solutions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    subheading: text("subheading"),
    descriptionMd: text("description_md").notNull(), // author in Markdown
    descriptionHtml: text("description_html"), // optional cached HTML
    aliases: text("aliases").array(), // optional alias phrases
    isPublished: boolean("is_published").notNull().default(false),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => ({
    slugUq: uniqueIndex("solutions_slug_uq").on(t.slug),
    solutionsSlugIdx: index("solutions_slug_idx").on(t.slug),
    solutionsPublishedIdx: index("solutions_published_idx").on(t.publishedAt),
  })
);

// Solutions shown inside industries, with overrides and ordering
export const solutionIndustries = pgTable(
  "solution_industries",
  {
    industryId: uuid("industry_id")
      .notNull()
      .references(() => industries.id, { onDelete: "cascade" }),
    solutionId: uuid("solution_id")
      .notNull()
      .references(() => solutions.id, { onDelete: "cascade" }),
    orderIndex: integer("order_index").notNull().default(0),
    aliasTitle: text("alias_title"), // e.g., "Automotive ERP"
    aliasSlug: text("alias_slug"), // e.g., "erp"
    introMd: text("intro_md"), // short intro tailored to industry
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.industryId, t.solutionId] }),
    solIndAliasSlugUq: uniqueIndex("sol_ind_alias_slug_uq").on(
      t.industryId,
      t.aliasSlug
    ),
    solIndIndustryIdx: index("sol_industry_industry_idx").on(t.industryId),
    solIndSolutionIdx: index("sol_industry_solution_idx").on(t.solutionId),
  })
);

// Child lists
export const solutionFeatures = pgTable(
  "solution_features",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    solutionId: uuid("solution_id")
      .notNull()
      .references(() => solutions.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    orderIndex: integer("order_index").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => ({
    solFeaturesSolutionIdx: index("sol_features_solution_idx").on(t.solutionId),
  })
);

export const solutionNeedSignals = pgTable(
  "solution_need_signals",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    solutionId: uuid("solution_id")
      .notNull()
      .references(() => solutions.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    orderIndex: integer("order_index").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => ({
    solNeedSignalsSolutionIdx: index("sol_need_signals_solution_idx").on(
      t.solutionId
    ),
  })
);

// Optional SEO per-entity
export const seoMeta = pgTable(
  "seo_meta",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerType: seoOwner("owner_type").notNull(),
    ownerId: uuid("owner_id").notNull(),
    metaTitle: text("meta_title"),
    metaDescription: text("meta_description"),
    ogImageUrl: text("og_image_url"),
  },
  (t) => ({
    uniq: uniqueIndex("seo_owner_uniq").on(t.ownerType, t.ownerId),
  })
);

export const invoices = pgTable("invoices", {
  id: text("id").primaryKey(), // uuid
  receipt: text("receipt").notNull().unique(), // human number: e.g., LW-2025-0042
  customer_name: text("customer_name"),
  customer_email: text("customer_email"),
  customer_phone: text("customer_phone"),
  amount_in_paise: integer("amount_in_paise").notNull(),
  currency: text("currency").notNull().default("INR"),
  provider: text("provider").notNull().default("mock"), // 'mock' | 'razorpay'
  provider_invoice_id: text("provider_invoice_id"), // inv_* later
  provider_short_url: text("provider_short_url"), // hosted page later
  status: text("status").notNull().default("draft"), // draft/issued/paid/expired/cancelled/partially_paid
  notes: jsonb("notes"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});