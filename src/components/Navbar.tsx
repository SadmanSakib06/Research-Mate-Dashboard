import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Microscope, Search, Bell, User, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - Navigation Links */}
        <div className="hidden md:flex justify-center py-3 border-b border-gray-700">
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium ${
                location.pathname === '/' ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/library" 
              className={`px-3 py-2 text-sm font-medium ${
                location.pathname === '/library' ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-white'
              }`}
            >
              Saved Papers
            </Link>
            <Link 
              to="/datasets" 
              className={`px-3 py-2 text-sm font-medium ${
                location.pathname === '/datasets' ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-white'
              }`}
            >
              Explore Datasets
            </Link>
            <Link 
              to="/guide" 
              className={`px-3 py-2 text-sm font-medium ${
                location.pathname === '/guide' ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-white'
              }`}
            >
              Research Guide
            </Link>
            <Link 
              to="/forum" 
              className={`px-3 py-2 text-sm font-medium ${
                location.pathname === '/forum' ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-white'
              }`}
            >
              Forum
            </Link>
          </div>
        </div>

        {/* Second Row - Logo, Search, and Buttons */}
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Microscope className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">ResearchMate</span>
            </Link>
            
            {/* Search Bar */}
            <div className="hidden md:block relative ml-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search research..."
                className="block w-64 pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-dark-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Account Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-transparent hover:bg-dark-800 text-white px-4 py-2 rounded-md border border-primary">
              Create Account
            </button>
            <button className="bg-primary hover:bg-orange-700 text-white px-4 py-2 rounded-md">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' ? 'text-primary bg-dark-800' : 'text-gray-300 hover:text-white hover:bg-dark-800'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/library"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/library' ? 'text-primary bg-dark-800' : 'text-gray-300 hover:text-white hover:bg-dark-800'
              }`}
              onClick={toggleMenu}
            >
              Saved Papers
            </Link>
            <Link
              to="/datasets"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/datasets' ? 'text-primary bg-dark-800' : 'text-gray-300 hover:text-white hover:bg-dark-800'
              }`}
              onClick={toggleMenu}
            >
              Explore Datasets
            </Link>
            <Link
              to="/guide"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/guide' ? 'text-primary bg-dark-800' : 'text-gray-300 hover:text-white hover:bg-dark-800'
              }`}
              onClick={toggleMenu}
            >
              Research Guide
            </Link>
            <Link
              to="/forum"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/forum' ? 'text-primary bg-dark-800' : 'text-gray-300 hover:text-white hover:bg-dark-800'
              }`}
              onClick={toggleMenu}
            >
              Forum
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2 space-y-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search research..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-dark-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
              <button className="w-full bg-transparent hover:bg-dark-800 text-white px-4 py-2 rounded-md border border-primary">
                Create Account
              </button>
              <button className="w-full bg-primary hover:bg-orange-700 text-white px-4 py-2 rounded-md">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;