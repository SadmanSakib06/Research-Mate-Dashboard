import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Microscope className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-white">ResearchMate</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Aliquam molestiae fugiat est, non publisher elit
              consequat nec. Donec mattis orci at
              felis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 uppercase text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/library" className="text-gray-400 hover:text-primary">Saved Papers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-primary">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 uppercase text-sm">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-primary">Help Center</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-primary">FAQs</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Download Our App */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 uppercase text-sm">Download Our App</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center border border-gray-700 rounded-md px-4 py-2 hover:bg-dark-800">
                <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.3-.89 3.55-.84 1.5.09 2.64.64 3.36 1.62-3.13 1.9-2.52 5.84.48 7.07-.71 1.95-1.6 3.91-3.47 4.32zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.66 4.23-3.74 4.25z"/>
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center border border-gray-700 rounded-md px-4 py-2 hover:bg-dark-800">
                <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="white">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.293-.707V2.521c0-.265.106-.52.293-.707zM14.5 12.707l2.302 2.302-8.3 4.964 5.998-7.266zm0-1.414l-8.3-7.266 8.3 4.964 2.302-2.302-8.3-4.963 10.001 6.265c.913.573.913 1.9 0 2.473l-10.001 6.266 8.3-4.963-2.302-2.302zm3.595.413l3.196 3.196a1 1 0 0 1 0 1.414l-3.196 3.196-2.828-2.828 2.828-2.828-2.828-2.828 2.828-2.828z"/>
                </svg>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Play Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} ResearchMate. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <select className="bg-dark-800 text-gray-400 border border-gray-700 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;