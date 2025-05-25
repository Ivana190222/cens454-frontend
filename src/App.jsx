import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import DirectoraAside from './components/DirectoraAside';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';
import 'aos/dist/aos.css';

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

  // Asegurarse de que el menú se cierre cuando se hace clic en enlaces
  useEffect(() => {
    const handleHashChange = () => {
      // Cerrar el menú móvil cuando cambia el hash (se hace clic en un enlace)
      const event = new CustomEvent('toggleMobileMenu', { detail: { isOpen: false } });
      window.dispatchEvent(event);
      document.body.classList.remove('mobile-menu-open');
    };
    
    // Manejar clics en cualquier enlace dentro de la aplicación
    const handleLinkClick = (e) => {
      if (e.target.tagName === 'A') {
        // Cerrar el menú móvil
        const event = new CustomEvent('toggleMobileMenu', { detail: { isOpen: false } });
        window.dispatchEvent(event);
        document.body.classList.remove('mobile-menu-open');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="app bg-dark-gradient min-h-screen">
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