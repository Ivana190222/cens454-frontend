import React, { useState, useEffect } from 'react';
import logo from '../assets/cens454.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para corregir el mapeo de enlaces
  const getHref = (text) => {
    const linkMap = {
      'Home': 'home',
      'Nosotros': 'nosotros',
      'Galería': 'galeria',
      'Contáctanos': 'contacto'
    };
    return `#${linkMap[text]}`;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark shadow-md py-2' : 'bg-dark/90 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 overflow-hidden rounded-md">
            <img 
              src={logo} 
              alt="CENS 454 Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-light font-bold text-lg">CENS 454</span>
          </div>
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute h-0.5 w-6 bg-light transform transition-all duration-300 ${
              menuOpen ? 'rotate-45 top-2.5' : 'top-0'
            }`}></span>
            
            <span className={`absolute h-0.5 w-6 top-2 bg-light transform transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            
            <span className={`absolute h-0.5 w-6 bg-light transform transition-all duration-300 ${
              menuOpen ? '-rotate-45 top-2.5' : 'top-5'
            }`}></span>
          </div>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {['Home', 'Nosotros', 'Galería', 'Contáctanos'].map((item, index) => (
            <a
              key={index}
              href={getHref(item)}
              className="text-light hover:text-accent font-medium text-sm transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-accent text-light px-4 py-2 rounded-md font-medium text-sm shadow-lg hover:bg-accent-dark transition-colors duration-300"
          >
            Inscríbete Ahora
          </a>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-2 bg-dark-darker flex flex-col space-y-2">
          {['Home', 'Nosotros', 'Galería', 'Contáctanos'].map((item, index) => (
            <a
              key={index}
              href={getHref(item)}
              onClick={() => setMenuOpen(false)}
              className="text-light py-2 border-b border-light/10 text-sm hover:text-accent"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-light px-4 py-2 rounded-md text-center text-sm font-medium mt-2"
          >
            Inscríbete Ahora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;