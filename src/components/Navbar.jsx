import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../i18n";

export default function Navbar() {
  const { language, toggleLanguage } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">VA</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">VeloXAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition font-medium">Features</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition font-medium">Services</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-blue-600 transition font-medium">Portfolio</Link>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">Contact</a>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
            >
              {language === "en" ? "العربية" : "English"}
            </button>
            <a href="#" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
              View Courses
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              {language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded">
              Features
            </Link>
            <Link to="/services" className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded">
              Services
            </Link>
            <Link to="/portfolio" className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded">
              Portfolio
            </Link>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded">
              About
            </a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
