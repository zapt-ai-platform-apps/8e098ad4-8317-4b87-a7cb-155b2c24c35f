import React from 'react';
import HeroSection from './components/HeroSection';
import ServiceList from './components/ServiceList';
import RequestForm from './components/RequestForm';
import OrderList from './components/OrderList';
import RatingReview from './components/RatingReview';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <div className="h-full flex-1">
        <HeroSection />
        <ServiceList />
        <RequestForm />
        <OrderList />
        <RatingReview />
      </div>
      <footer className="py-4 border-t text-center">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cursor-pointer underline">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}