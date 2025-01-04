import React from 'react';
import { Award } from 'lucide-react';

export default function GroupCard() {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <Award className="h-12 w-12 text-red-600 mb-4" />
      <h3 className="text-2xl font-bold mb-4">Group Categories</h3>
      <ul className="space-y-3">
        <li>Group 1: Classes 3rd, 4th, 5th</li>
        <li>Group 2: Classes 6th, 7th, 8th</li>
        <li>Group 3: Classes 9th, 10th, 11th</li>
      </ul>
    </div>
  );
}