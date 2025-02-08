import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { serviceRequests } from '../drizzle/schema.js';
import * as Sentry from '@sentry/node';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  
  try {
    console.log('API: Fetching orders...');
    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);
    
    const orders = await db.select().from(serviceRequests).orderBy(serviceRequests.createdAt, 'desc').limit(20);
    
    res.status(200).json(orders);
  } catch (error) {
    console.error('API: Error in fetching orders:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}