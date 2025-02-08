import React, { useState } from 'react';
import useServices from '../../hooks/useServices';

export default function ServiceList() {
  const { services, loading } = useServices();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('alphabetical');

  const filteredServices = services.filter(service =>
    service.title.includes(searchTerm) || service.category.includes(searchTerm)
  );

  const sortedServices = filteredServices.sort((a, b) => {
    if (sortOption === 'alphabetical') {
      return a.title.localeCompare(b.title);
    }
    return a.id - b.id;
  });

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">الخدمات المتوفرة</h2>
      <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
        <input
          type="text"
          placeholder="ابحث عن خدمة..."
          className="box-border p-2 border rounded mb-2 sm:mb-0"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded cursor-pointer"
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
        >
          <option value="alphabetical">تصنيف أبجدي</option>
          <option value="mostPopular">الأكثر شهرة</option>
        </select>
      </div>
      {loading ? (
        <p>جار التحميل...</p>
      ) : sortedServices.length === 0 ? (
        <p>لا توجد خدمات تطابق بحثك.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {sortedServices.map(service => (
            <div key={service.id} className="p-4 border rounded text-center">
              <div className="text-4xl mb-2">
                {service.icon ? service.icon : '🔧'}
              </div>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.category}</p>
              {service.description && (
                <p className="text-xs text-gray-500 mt-1">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}