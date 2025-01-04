import React from 'react';
import { Trophy } from 'lucide-react';

export default function PrizeCard() {
  return (
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
  );
}