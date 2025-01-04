import React from 'react';
import PrizeCard from './PrizeCard';
import GroupCard from './GroupCard';
import RegistrationSection from './RegistrationSection';

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
            <PrizeCard />
            <GroupCard />
          </div>

          <RegistrationSection />
        </div>
      </div>
    </section>
  );
}