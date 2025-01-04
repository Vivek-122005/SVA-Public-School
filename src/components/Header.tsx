import React from 'react';
import { School, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <School className="h-8 w-8 text-red-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">SVA Public School</h1>
            <p className="text-sm text-gray-600">Alwar</p>
          </div>
        </div>
        <a
          href="https://wa.me/7073331995"
          className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span>Call Now</span>
        </a>
      </div>
    </header>
  );
}
