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
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Request submitted with:', { description, location, serviceTime, phone, email });
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