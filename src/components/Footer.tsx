import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Admission Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Scholarship Details
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">SVA Public School</p>
            <p className="mb-2">Shiv Colony, Tijara Phatak</p>
            <p>Alwar</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/sva_school_alwar?igsh=OGs0Z290cWQ5eG8x" className="hover:text-red-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-700">
          <p>© 2025 SVA Public School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}