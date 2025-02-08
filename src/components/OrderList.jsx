import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState('الكل');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching orders from API...');
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        console.log('Orders fetched:', data);
      })
      .catch(error => {
        console.error('Failed to fetch orders:', error);
        Sentry.captureException(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredOrders = orders.filter(order => {
    if (filterStatus === 'الكل') return true;
    return order.status === filterStatus;
  });

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">الطلبات المقدمة</h2>
      <div className="mb-4">
        <select
          className="p-2 border rounded cursor-pointer"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="الكل">الكل</option>
          <option value="جديد">جديد</option>
          <option value="قيد التنفيذ">قيد التنفيذ</option>
          <option value="مكتمل">مكتمل</option>
        </select>
      </div>
      {loading ? (
        <p>جار التحميل...</p>
      ) : filteredOrders.length === 0 ? (
        <p>لا توجد طلبات لهذا التصنيف.</p>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map(order => (
            <div key={order.id} className="p-4 border rounded">
              <h3 className="font-bold">{order.description}</h3>
              <p>{order.location}</p>
              <p className="text-sm text-gray-600">{order.serviceTime}</p>
              <p className="text-sm text-gray-600">هاتف: {order.phone}</p>
              <p className="mt-2 text-sm font-medium">الحالة: {order.status || 'جديد'}</p>
              <div className="mt-2 space-x-2">
                <button className="cursor-pointer p-2 border rounded">اتصال</button>
                <button className="cursor-pointer p-2 border rounded">رسالة عبر المنصة</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}