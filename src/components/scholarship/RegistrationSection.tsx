import React from 'react';
import { MapPin } from 'lucide-react';

export default function RegistrationSection() {
  return (
    <div className="text-center">
      <p className="text-lg mb-4">Certificates for all participants</p>
      
      <div className="flex items-center justify-center space-x-2 mb-6 text-gray-700">
        <MapPin className="h-5 w-5 text-red-600" />
        <div className="text-left">
          <p className="font-semibold">Exam Center:</p>
          <p>SVA Public School</p>
          <p>Shiv Colony, Tijara Phatak</p>
          <p>Alwar</p>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
      >
        Register for SVA-SAT
      </button>
    </div>
  );
}