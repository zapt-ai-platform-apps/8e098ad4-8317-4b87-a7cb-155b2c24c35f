import React from 'react';

export default function HeroSection() {
  return (
    <section className="py-12 bg-blue-100 text-center">
      <h1 className="text-4xl font-bold mb-4">منصة رزقك جنبك</h1>
      <p className="text-lg mb-6 px-4">
        توفر منصة رزقك جنبك حلولاً سريعة وسهلة للبحث عن الخدمات، تسهل التواصل وتضمن جودة عالية عبر التقييمات.
      </p>
      <img src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlcyUyMGlsbHVzdHJhdGlvbiUyQyUyMG1vZGVybiUyMGRlc2lnbnxlbnwwfHx8fDE3MzkwMDg0MTd8MA&ixlib=rb-4.0.3&q=80&w=1080" 
         
        alt="Service Illustration" 
        data-image-request="services illustration, modern design" 
        className="mx-auto w-64 h-64 object-cover"
      />
    </section>
  );
}