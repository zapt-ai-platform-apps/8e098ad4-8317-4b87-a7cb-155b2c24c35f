import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function RatingReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Rating submitted:', { rating, comment });
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
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className={`cursor-pointer w-8 h-8 ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.539 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
            </svg>
          ))}
        </div>
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