import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">VA</span>
            </div>
            <span className="text-xl font-bold text-gray-900">VeloXAI</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition font-medium">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition font-medium">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition font-medium">Contact</a>
          </div>

          <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            View Courses
          </a>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
