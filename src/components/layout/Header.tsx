import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const services = [
    { name: 'NIR Smart Packages', href: '/services/smart-packages' },
    { name: 'NIR Smart Finance', href: '/services/smart-finance' },
    { name: 'NIR Smart Brand Promotion', href: '/services/brand-promotion' },
    { name: 'NIR Constructions', href: '/services/constructions' },
    { name: 'NIR Designs & Solutions', href: '/services/designs' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Projects', href: '/projects' },
    { name: 'List Property', href: '/list-property' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpeg"
              alt="Company Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold text-xl text-[#1a237e]">The Next Innovation Reality</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-600 hover:text-[#26a69a] transition-colors duration-300"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#26a69a] transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-[#26a69a] font-semibold'
                    : 'text-gray-600 hover:text-[#26a69a]'
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#26a69a]">
                  <User className="h-5 w-5" />
                  <span>{user.displayName || 'Profile'}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#26a69a]"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-[#26a69a] transition-colors duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-600 hover:text-[#26a69a] hover:bg-gray-100"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#26a69a] hover:bg-gray-100"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-[#26a69a] font-semibold'
                      : 'text-gray-600 hover:text-[#26a69a]'
                  } block px-3 py-2 rounded-md text-base transition-colors duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Authentication */}
              {user ? (
                <div>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#26a69a] hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-red-600 hover:text-[#26a69a] hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-[#26a69a] hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

