import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import StarRating from './StarRating';
import { submitRating } from '../utils/ratingsApi';

export default function RatingReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Submitting rating:', { rating, comment });
    try {
      const result = await submitRating(rating, comment);
      console.log('Rating submitted:', result);
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Rating submission failed:', error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">قيم الخدمة</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <StarRating rating={rating} hover={hover} setRating={setRating} setHover={setHover} />
        <div className="mb-4">
          <textarea
            className="box-border w-full p-2 border rounded"
            placeholder="اكتب تعليقك هنا..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full p-2 bg-green-600 text-white rounded"
          disabled={loading}
        >
          {loading ? 'جار الإرسال...' : 'أرسل تقييمك'}
        </button>
      </form>
    </section>
  );
}