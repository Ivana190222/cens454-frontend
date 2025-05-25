import React, { useState, useEffect } from 'react';
// Importamos la imagen de forma absoluta desde public
// import logo from '../assets/Cens454.jpeg';
import './Navbar.css'; // Importamos un archivo CSS específico para la navegación

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Escuchar el evento del botón de hamburguesa HTML
  useEffect(() => {
    const handleToggleMenu = (event) => {
      setMenuOpen(event.detail.isOpen);
    };
    
    window.addEventListener('toggleMobileMenu', handleToggleMenu);
    
    return () => {
      window.removeEventListener('toggleMobileMenu', handleToggleMenu);
    };
  }, []);

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

  // Función para manejar clics en enlaces del menú móvil
  const handleMobileMenuClick = (targetId) => {
    // Cerrar el menú
    setMenuOpen(false);
    
    // Comunicar con el botón hamburguesa HTML
    const event = new CustomEvent('toggleMobileMenu', { detail: { isOpen: false } });
    window.dispatchEvent(event);
    document.body.classList.remove('mobile-menu-open');
    document.body.classList.remove('menu-is-open');
    
    // Pequeña pausa para permitir que el menú se cierre antes de desplazarse
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        <a 
          href="#home" 
          className="navbar-logo"
        >
          <div className="logo-container">
            <img 
              src={process.env.PUBLIC_URL + '/logo.png'} 
              alt="CENS 454 Logo" 
              className="logo-image"
            />
          </div>
          <div className="logo-text">
            <span className="logo-text-main">
              <span className="logo-text-highlight">CENS</span> 454
            </span>
          </div>
        </a>
        
        {/* Desktop menu */}
        <div className="desktop-menu">
          {['Home', 'Nosotros', 'Galería', 'Contáctanos'].map((item, index) => (
            <a
              key={index}
              href={getHref(item)}
              className="desktop-menu-item"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="cta-button"
          >
            <span>Inscríbete Ahora</span>
            <svg className="cta-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <div className="mobile-menu-content">
          {['Home', 'Nosotros', 'Galería', 'Contáctanos'].map((item, index) => {
            const targetId = getHref(item).substring(1); // Quitar el # del inicio
            return (
              <a
                key={index}
                href={getHref(item)}
                onClick={(e) => {
                  e.preventDefault(); // Prevenir el comportamiento predeterminado
                  handleMobileMenuClick(targetId);
                }}
                className="mobile-menu-item"
              >
                {item}
              </a>
            );
          })}
          <a 
            href="#contacto" 
            onClick={(e) => {
              e.preventDefault();
              handleMobileMenuClick('contacto');
            }}
            className="mobile-cta-button"
          >
            <span>Inscríbete Ahora</span>
            <svg className="mobile-cta-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;