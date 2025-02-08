import { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';

export default function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching services from API...');
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        console.log('Services fetched:', data);
      })
      .catch(error => {
        console.error('Failed to fetch services:', error);
        Sentry.captureException(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { services, loading };
}