import React from 'react';
import { BookOpen, Gift, ShoppingBag } from 'lucide-react';

export default function AdmissionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Admission Open</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-red-600 mb-6">
              New Building Inauguration Offers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-red-600 mb-2" />
                <span className="font-medium">Free Books</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                <Gift className="h-8 w-8 text-red-600 mb-2" />
                <span className="font-medium">Free 2 Dress Set</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                <ShoppingBag className="h-8 w-8 text-red-600 mb-2" />
                <span className="font-medium">Free Bag</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Offer valid for the first 50 students (Playgroup to 8th Class)
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Book Your Seat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}