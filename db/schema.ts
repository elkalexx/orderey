import {doublePrecision, pgTable, serial, timestamp, varchar} from 'drizzle-orm/pg-core'

export const orders = pgTable('orders', {
    id: serial('id'),
    orderId: varchar('order_id').notNull(),
    status: varchar('status').notNull(),
    customerId: varchar('customer_id'),
    subtotal: doublePrecision("subtotal").notNull(),
    shippingAmount: doublePrecision('shipping_amount').notNull(),
    grandTotal: doublePrecision('grand_total').notNull(),
    customerEmail: varchar('customer_email').notNull(),
    customerFirstName: varchar('customer_first_name').notNull(),
    customerLastName: varchar('customer_last_name').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
