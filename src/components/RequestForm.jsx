import React from 'react';
import { useRequestForm } from '../hooks/useRequestFormLogic';

export default function RequestForm() {
  const {
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
  } = useRequestForm();

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">طلب خدمة</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <div>
          <label className="block mb-1 font-medium">صف طلبك بالتفصيل</label>
          <textarea
            className="box-border w-full p-2 border rounded"
            placeholder="أحتاج كهربائي لإصلاح ماس كهربائي في غرفة المعيشة"
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength={500}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">الموقع</label>
          <div className="flex space-x-2">
            <input
              type="text"
              className="box-border w-full p-2 border rounded"
              placeholder="أدخل العنوان يدوياً"
              value={location}
              onChange={e => setLocation(e.target.value)}
              required
            />
            <button type="button" onClick={handleGeolocation} className="cursor-pointer p-2 border rounded">
              تحديد الموقع تلقائياً
            </button>
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">الوقت</label>
          <input
            type="datetime-local"
            className="box-border w-full p-2 border rounded"
            value={serviceTime}
            onChange={e => setServiceTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">رقم الهاتف</label>
          <input
            type="tel"
            className="box-border w-full p-2 border rounded"
            placeholder="مثال: 05XXXXXXXX"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">البريد الإلكتروني</label>
          <input
            type="email"
            className="box-border w-full p-2 border rounded"
            placeholder="example@mail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full p-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? 'جار الإرسال...' : 'أرسل الطلب'}
        </button>
      </form>
    </section>
  );
}