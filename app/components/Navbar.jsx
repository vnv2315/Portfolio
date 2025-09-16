"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Vishnu N V
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}

            
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-2">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className=" items-center justify-between mt-4 px-3">
            
            <Link
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
