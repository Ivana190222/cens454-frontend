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