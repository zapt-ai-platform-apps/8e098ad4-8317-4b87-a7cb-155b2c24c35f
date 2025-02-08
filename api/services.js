import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { services } from '../drizzle/schema.js';
import * as Sentry from '@sentry/node';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    console.log('API: Fetching services...');
    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);

    const allServices = await db.select().from(services).orderBy(services.createdAt, 'desc');
    res.status(200).json(allServices);
  } catch (error) {
    console.error('API: Error in fetching services:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}