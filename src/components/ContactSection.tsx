import { MapPin, Phone } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Register for Admission</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <p>SVA Public School, Shiv Colony, Tijara Phatak, Alwar</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <p>Helpline 1: <a href="tel:7073331995" className="text-red-600">7073331995</a></p>
                    <p>Helpline 2: <a href="tel:7073087068" className="text-red-600">7073087068</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.8485961736694!2d76.6344!3d27.1789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d6d7067c67%3A0x6f3b89ca17e15f96!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1635835636547!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}