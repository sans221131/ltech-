CREATE TYPE "public"."seo_owner" AS ENUM('industry', 'solution');--> statement-breakpoint
CREATE TABLE "industries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"blurb" text,
	"aliases" text[],
	"order_index" integer DEFAULT 0 NOT NULL,
	"is_published" boolean DEFAULT false NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" text PRIMARY KEY NOT NULL,
	"receipt" text NOT NULL,
	"customer_name" text,
	"customer_email" text,
	"customer_phone" text,
	"amount_in_paise" integer NOT NULL,
	"currency" text DEFAULT 'INR' NOT NULL,
	"provider" text DEFAULT 'mock' NOT NULL,
	"provider_invoice_id" text,
	"provider_short_url" text,
	"status" text DEFAULT 'draft' NOT NULL,
	"notes" jsonb,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "invoices_receipt_unique" UNIQUE("receipt")
);
--> statement-breakpoint
CREATE TABLE "seo_meta" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_type" "seo_owner" NOT NULL,
	"owner_id" uuid NOT NULL,
	"meta_title" text,
	"meta_description" text,
	"og_image_url" text
);
--> statement-breakpoint
CREATE TABLE "solution_features" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"solution_id" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "solution_industries" (
	"industry_id" uuid NOT NULL,
	"solution_id" uuid NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"alias_title" text,
	"alias_slug" text,
	"intro_md" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "solution_industries_industry_id_solution_id_pk" PRIMARY KEY("industry_id","solution_id")
);
--> statement-breakpoint
CREATE TABLE "solution_need_signals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"solution_id" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"order_index" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "solutions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"subheading" text,
	"description_md" text NOT NULL,
	"description_html" text,
	"aliases" text[],
	"is_published" boolean DEFAULT false NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "solution_features" ADD CONSTRAINT "solution_features_solution_id_solutions_id_fk" FOREIGN KEY ("solution_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "solution_industries" ADD CONSTRAINT "solution_industries_industry_id_industries_id_fk" FOREIGN KEY ("industry_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "solution_industries" ADD CONSTRAINT "solution_industries_solution_id_solutions_id_fk" FOREIGN KEY ("solution_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "solution_need_signals" ADD CONSTRAINT "solution_need_signals_solution_id_solutions_id_fk" FOREIGN KEY ("solution_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "industries_slug_uq" ON "industries" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "industries_slug_idx" ON "industries" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "industries_order_idx" ON "industries" USING btree ("order_index");--> statement-breakpoint
CREATE UNIQUE INDEX "seo_owner_uniq" ON "seo_meta" USING btree ("owner_type","owner_id");--> statement-breakpoint
CREATE INDEX "sol_features_solution_idx" ON "solution_features" USING btree ("solution_id");--> statement-breakpoint
CREATE UNIQUE INDEX "sol_ind_alias_slug_uq" ON "solution_industries" USING btree ("industry_id","alias_slug");--> statement-breakpoint
CREATE INDEX "sol_industry_industry_idx" ON "solution_industries" USING btree ("industry_id");--> statement-breakpoint
CREATE INDEX "sol_industry_solution_idx" ON "solution_industries" USING btree ("solution_id");--> statement-breakpoint
CREATE INDEX "sol_need_signals_solution_idx" ON "solution_need_signals" USING btree ("solution_id");--> statement-breakpoint
CREATE UNIQUE INDEX "solutions_slug_uq" ON "solutions" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "solutions_slug_idx" ON "solutions" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "solutions_published_idx" ON "solutions" USING btree ("published_at");