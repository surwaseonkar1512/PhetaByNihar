import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home Page', href: '#' },
    { name: 'About Nihar Tambde', href: '#about' },
    { name: 'Pheta Services & Workshops', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Products & Rentals Page', href: '#products' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FFFDFB] shadow-soft py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-12 h-12 bg-[#6E1E18] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
            NT
          </div>
          <span className="font-serif font-bold text-[#4D2D22] text-xl hidden sm:block">Pheta By Nihar</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[#666666] hover:text-[#6E1E18] font-sans text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button showArrow>Book Now Page</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-[#4D2D22]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#FFFDFB] shadow-soft-hover py-4 px-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[#666666] hover:text-[#6E1E18] font-sans text-base font-medium transition-colors py-2 border-b border-[#E8D8C5] last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button showArrow className="w-full mt-4">Book Now Page</Button>
        </div>
      )}
    </nav>
  );
};
