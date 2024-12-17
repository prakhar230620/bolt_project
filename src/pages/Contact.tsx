import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';

const Contact = () => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div className="ml-4">
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:contact@nextinnovation.com"
                        className="text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        contact@nextinnovation.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div className="ml-4">
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div className="ml-4">
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        123 Innovation Street
                        <br />
                        Tech Valley, CA 94043
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationMap />
    </div>
  );
};

export default Contact;