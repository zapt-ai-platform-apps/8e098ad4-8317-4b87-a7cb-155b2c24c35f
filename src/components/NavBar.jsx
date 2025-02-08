import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-around">
      <Link to="/" className="cursor-pointer text-lg font-semibold">الرئيسية</Link>
      <Link to="/services" className="cursor-pointer text-lg font-semibold">الخدمات</Link>
      <Link to="/request" className="cursor-pointer text-lg font-semibold">طلب خدمة</Link>
      <Link to="/orders" className="cursor-pointer text-lg font-semibold">الطلبات</Link>
      <Link to="/feedback" className="cursor-pointer text-lg font-semibold">قيم الخدمة</Link>
    </nav>
  );
}