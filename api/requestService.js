import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { serviceRequests } from '../drizzle/schema.js';
import * as Sentry from '@sentry/node';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  
  try {
    const { description, location, serviceTime, phone, email } = req.body;
    console.log('API: Received service request:', { description, location, serviceTime, phone, email });
    
    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);
    
    const result = await db.insert(serviceRequests).values({
      description,
      location,
      serviceTime: new Date(serviceTime),
      phone,
      email
    }).returning();
    
    res.status(200).json(result);
  } catch (error) {
    console.error('API: Error in requestService:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}