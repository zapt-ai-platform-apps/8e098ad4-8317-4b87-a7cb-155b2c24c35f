import React, { useState } from 'react';

const initialOrders = [
  { 
    id: 1, 
    service: 'كهرباء', 
    description: 'إصلاح ماس كهربائي', 
    location: 'الرياض', 
    time: '2023-10-01T14:00', 
    contact: '0555123456', 
    status: 'جديد'
  },
  { 
    id: 2, 
    service: 'تنظيف', 
    description: 'تنظيف منزل', 
    location: 'جدة', 
    time: '2023-10-02T10:00', 
    contact: '0555987654', 
    status: 'قيد التنفيذ'
  }
];

export default function OrderList() {
  const [orders] = useState(initialOrders);
  const [filterStatus, setFilterStatus] = useState('الكل');

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
      {filteredOrders.length === 0 ? (
        <p>لا توجد طلبات لهذا التصنيف.</p>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map(order => (
            <div key={order.id} className="p-4 border rounded">
              <h3 className="font-bold">{order.service}</h3>
              <p>{order.description}</p>
              <p className="text-sm text-gray-600">{order.location} - {order.time}</p>
              <p className="text-sm text-gray-600">اتصل: {order.contact}</p>
              <p className="mt-2 text-sm font-medium">الحالة: {order.status}</p>
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