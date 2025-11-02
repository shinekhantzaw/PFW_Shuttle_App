import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* logo */}
        <div className="flex items-center">
          <img
            src="/pfw-logo.png"
            alt="PFW Logo"
            className="h-12 w-auto"
          />
          <span className="ml-3 font-bold text-lg">
            PFW Shuttle Tracker
          </span>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="/live" className="hover:text-yellow-500">Live Map</a>
          <a href="/info" className="hover:text-yellow-500">Info</a>
          <a href="/contact" className="hover:text-yellow-500">Contact</a>
        </div>

        {/* mbile hamburger */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-center py-2 space-y-2 border-t border-gray-200">
          <a href="/" className="block hover:text-yellow-500">Home</a>
          <a href="/live" className="hover:text-yellow-500">Live Map</a>
          <a href="/info" className="block hover:text-yellow-500">Info</a>
          <a href="/contact" className="block hover:text-yellow-500">Contact</a>
        </div>
      )}
    </nav>
  );
}
