import React, { useState, useEffect } from 'react';
// Importamos la imagen de forma absoluta desde public
// import logo from '../assets/Cens454.jpeg';

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
      scrolled ? 'bg-dark shadow-md py-1' : 'bg-dark/95 py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center space-x-3"
        >
          <div className="h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-md border-2 border-[#D4AF37]/30 shadow-lg">
            <img 
              src={process.env.PUBLIC_URL + '/logo.png'} 
              alt="CENS 454 Logo" 
              className="w-full h-full object-contain bg-black"
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-light font-bold text-lg font-serif tracking-wider">
              <span className="text-[#D4AF37]">CENS</span> 454
            </span>
          </div>
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute h-0.5 w-6 bg-[#D4AF37] transform transition-all duration-300 ${
              menuOpen ? 'rotate-45 top-2.5' : 'top-0'
            }`}></span>
            
            <span className={`absolute h-0.5 w-6 top-2 bg-[#D4AF37] transform transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            
            <span className={`absolute h-0.5 w-6 bg-[#D4AF37] transform transition-all duration-300 ${
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
              className="text-light hover:text-[#D4AF37] font-medium text-sm transition-colors duration-300 border-b border-transparent hover:border-[#D4AF37]/50"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-gradient-to-r from-[#996515] to-[#FFD700] text-dark px-4 py-2 rounded-md font-medium text-sm shadow-lg hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <span>Inscríbete Ahora</span>
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
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
              className="text-light py-2 border-b border-[#D4AF37]/10 text-sm hover:text-[#D4AF37]"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-[#996515] to-[#FFD700] text-dark px-4 py-2 rounded-md text-center text-sm font-medium mt-2 flex items-center justify-center"
          >
            <span>Inscríbete Ahora</span>
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;