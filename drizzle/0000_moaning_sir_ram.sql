CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial NOT NULL,
	"order_id" varchar NOT NULL,
	"status" varchar NOT NULL,
	"customer_id" varchar,
	"subtotal" double precision NOT NULL,
	"shipping_amount" double precision NOT NULL,
	"grand_total" double precision NOT NULL,
	"customer_email" varchar NOT NULL,
	"customer_first_name" varchar NOT NULL,
	"customer_last_name" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
