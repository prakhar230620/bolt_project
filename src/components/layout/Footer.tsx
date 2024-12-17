import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'NIR Smart Packages', href: '/services/smart-packages' },
    { name: 'NIR Smart Finance', href: '/services/smart-finance' },
    { name: 'NIR Smart Brand Promotion', href: '/services/brand-promotion' },
    { name: 'NIR Constructions', href: '/services/constructions' },
    { name: 'NIR Designs & Solutions', href: '/services/designs' },
  ];

  return (
    <footer className="bg-[#1a237e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Next Innovation</h3>
            <p className="text-gray-300">
              Transforming ideas into reality through innovative solutions.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-[#26a69a] transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-[#ff5722] px-4 py-2 rounded-r-md hover:bg-[#f4511e] transition-colors duration-300"
                aria-label="Subscribe"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="hover:text-[#26a69a] transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Next Innovation. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-[#26a69a] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#26a69a] transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;