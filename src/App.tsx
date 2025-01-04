import React from 'react';
import Header from './components/Header';
import ScholarshipSection from './components/scholarship/ScholarshipSection';
import AdmissionSection from './components/AdmissionSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ScholarshipSection />
        <AdmissionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;