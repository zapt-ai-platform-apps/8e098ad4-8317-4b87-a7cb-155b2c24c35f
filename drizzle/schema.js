import { pgTable, serial, text, timestamp, uuid, integer } from 'drizzle-orm/pg-core';

export const serviceRequests = pgTable('service_requests', {
  id: serial('id').primaryKey(),
  description: text('description').notNull(),
  location: text('location').notNull(),
  serviceTime: timestamp('service_time').notNull(),
  phone: text('phone').notNull(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const ratings = pgTable('ratings', {
  id: serial('id').primaryKey(),
  rating: integer('rating').notNull(),
  comment: text('comment').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  icon: text('icon'),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
});