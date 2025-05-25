import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CENS 454</h3>
          <p>Educación de calidad para adultos en Quequén</p>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>529 N°3888, Quequén</p>
          <p>Tel: (2262) 610058</p>
          <p>Email: cens454necochea@abc.gob.ar</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces</h3>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 CENS 454 - Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer;