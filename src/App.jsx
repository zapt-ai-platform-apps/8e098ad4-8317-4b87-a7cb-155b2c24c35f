import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import RequestService from './pages/RequestService';
import Orders from './pages/Orders';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col text-gray-900">
        <NavBar />
        <div className="h-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/request" element={<RequestService />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
        <footer className="py-4 border-t text-center">
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cursor-pointer underline"
          >
            Made on ZAPT
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}