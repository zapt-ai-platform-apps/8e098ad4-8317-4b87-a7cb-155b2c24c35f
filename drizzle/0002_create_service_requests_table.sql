CREATE TABLE IF NOT EXISTS "service_requests" (
  "id" SERIAL PRIMARY KEY,
  "description" TEXT NOT NULL,
  "location" TEXT NOT NULL,
  "service_time" TIMESTAMP NOT NULL,
  "phone" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);