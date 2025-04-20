import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoo from "../assets/img/logo1.png";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-12 w-40 relative">
              <img 
                src={logoo}
                alt="Aerofly Travels"
                title="Aerofly Travels"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-yellow-400 ml-2">
              Aerofly Travels
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {["visas", "packages", "blog", "other-services", "Gallery", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="px-3 py-2 text-white hover:text-gray-300 transition-all"
              >
                {item.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-3 text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-90 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {["visas", "packages", "blog", "other-services", "Gallery", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              onClick={toggleMenu}
              className="text-white text-lg hover:text-blue-400 transition-all"
            >
              {item.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
