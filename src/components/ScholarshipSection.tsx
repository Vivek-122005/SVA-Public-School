import React from 'react';
import { Award, Trophy } from 'lucide-react';

export default function ScholarshipSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              SVA-SAT Scholarship Cum Admission Test
            </h2>
            <p className="text-xl text-red-600 font-semibold">12 January 2025, Sunday</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <Trophy className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Prize Distribution</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="font-semibold">1st Prize:</span>
                  <span className="text-red-600">₹11,000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold">2nd Prize:</span>
                  <span className="text-red-600">₹5,100</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="font-semibold">3rd Prize:</span>
                  <span className="text-red-600">₹2,100</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Group Categories</h3>
              <ul className="space-y-3">
                <li>Group 1: Classes 3rd, 4th, 5th</li>
                <li>Group 2: Classes 6th, 7th, 8th</li>
                <li>Group 3: Classes 9th, 10th, 11th</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">Certificates for all participants</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Register for SVA-SAT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}