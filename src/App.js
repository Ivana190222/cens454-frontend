import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import DirectoraAside from './components/DirectoraAside';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  // Inicializar AOS cuando el componente se monta
  useEffect(() => {
    // Comprobar si AOS está disponible
    const AOS = window.AOS;
    if (AOS) {
      // Inicializar con configuración básica
      AOS.init();
    }
  }, []);

  // Configurar favicon dinámicamente como respaldo
  useEffect(() => {
    // Si por alguna razón el favicon SVG no funciona, esto servirá como respaldo
    const favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = '/img/favicon.svg';
      newFavicon.type = 'image/svg+xml';
      document.head.appendChild(newFavicon);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Nosotros />
      <DirectoraAside />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;