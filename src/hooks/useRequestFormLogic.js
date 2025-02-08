import { useState } from 'react';
import * as Sentry from '@sentry/browser';

export function useRequestForm() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation(`Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
        },
        error => {
          console.error('Geolocation error:', error);
          Sentry.captureException(error);
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Submitting service request:', { description, location, serviceTime, phone, email });
    try {
      const response = await fetch('/api/requestService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, location, serviceTime, phone, email }),
      });
      if (!response.ok) {
        throw new Error('Request submission failed');
      }
      const result = await response.json();
      console.log('Service request submitted:', result);
      setDescription('');
      setLocation('');
      setServiceTime('');
      setPhone('');
      setEmail('');
    } catch (error) {
      console.error('Request submission failed:', error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    description,
    setDescription,
    location,
    setLocation,
    serviceTime,
    setServiceTime,
    phone,
    setPhone,
    email,
    setEmail,
    loading,
    handleGeolocation,
    handleSubmit,
  };
}