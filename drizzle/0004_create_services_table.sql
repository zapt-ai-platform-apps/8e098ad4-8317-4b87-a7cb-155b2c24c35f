CREATE TABLE IF NOT EXISTS "services" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "icon" TEXT,
  "description" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW()
);