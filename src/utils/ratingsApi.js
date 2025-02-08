export async function submitRating(rating, comment) {
  const response = await fetch('/api/submitRating', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rating, comment }),
  });
  if (!response.ok) {
    throw new Error('Rating submission failed');
  }
  const result = await response.json();
  return result;
}