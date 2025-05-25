import React, { useState, useEffect } from 'react';
import './Galeria.css';
import Alumnos1 from '../assets/Alumnos1.jpeg';
import Alumnos2 from '../assets/Alumnos2.jpeg';
import Alumnos3 from '../assets/Alumnos3.jpeg';
import Alumnos4 from '../assets/Alumnos4.jpeg';
import Alumnos5 from '../assets/Alumnos5.jpeg';
import Alumnos6 from '../assets/Alumnos6.jpeg';
import Alumnos7 from '../assets/Alumnos7.jpeg';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('todos');

  const images = [
    { src: Alumnos1, alt: "Estudiantes CENS 454", desc: "Nuestros estudiantes en el aula", category: 'aula' },
    { src: Alumnos2, alt: "Actividades educativas", desc: "Talleres prácticos", category: 'actividades' },
    { src: Alumnos3, alt: "Actividades educativas", desc: "Celebraciones institucionales", category: 'eventos' },
    { src: Alumnos4, alt: "Actividades educativas", desc: "Actividades deportivas", category: 'actividades' },
    { src: Alumnos5, alt: "Actividades educativas", desc: "Proyectos grupales", category: 'aula' },
    { src: Alumnos6, alt: "Actividades educativas", desc: "Charlas formativas", category: 'eventos' },
    { src: Alumnos7, alt: "Actividades educativas", desc: "Encuentros culturales", category: 'eventos' }
  ];

  // Filtrar imágenes según la categoría seleccionada
  const filteredImages = activeCategory === 'todos' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Inicializar el carousel de Bootstrap
  useEffect(() => {
    if (typeof window !== 'undefined' && window.bootstrap) {
      // Inicializa todos los carousels
      const carouselElement = document.getElementById('galeria-carousel');
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 3000,
          wrap: true
        });
      }
    }
  }, []);

  return (
    <section id="galeria">
      <div className="galeria-container">
        <h2 className="text-center" data-aos="fade-up">Galería</h2>
        <p className="galeria-description" data-aos="fade-up" data-aos-delay="200">
          Conoce nuestras actividades y el día a día en CENS 454
        </p>
        
        {/* Carrusel destacado */}
        <div className="carousel-section" data-aos="fade-up" data-aos-delay="300">
          <div id="galeria-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {images.slice(0, 3).map((_, idx) => (
                <button 
                  key={idx} 
                  type="button" 
                  data-bs-target="#galeria-carousel" 
                  data-bs-slide-to={idx} 
                  className={idx === 0 ? "active" : ""}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images.slice(0, 3).map((image, idx) => (
                <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                  <img src={image.src} className="d-block w-100" alt={image.alt} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{image.alt}</h5>
                    <p>{image.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#galeria-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#galeria-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
        
        {/* Filtros de categoría */}
        <div className="galeria-filtros" data-aos="fade-up">
          <button 
            className={`filtro-btn ${activeCategory === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveCategory('todos')}
          >
            Todos
          </button>
          <button 
            className={`filtro-btn ${activeCategory === 'aula' ? 'active' : ''}`}
            onClick={() => setActiveCategory('aula')}
          >
            Aula
          </button>
          <button 
            className={`filtro-btn ${activeCategory === 'actividades' ? 'active' : ''}`}
            onClick={() => setActiveCategory('actividades')}
          >
            Actividades
          </button>
          <button 
            className={`filtro-btn ${activeCategory === 'eventos' ? 'active' : ''}`}
            onClick={() => setActiveCategory('eventos')}
          >
            Eventos
          </button>
        </div>
        
        {/* Grid de imágenes */}
        <div className="galeria-grid">
          {filteredImages.map((image, index) => (
            <div 
              className="galeria-item" 
              key={index} 
              onClick={() => openModal(image)}
              data-aos="zoom-in"
              data-aos-delay={100 + (index * 50)}
            >
              <div className="galeria-img-container">
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="galeria-overlay">
                <p>{image.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal para ver imagen ampliada */}
        {selectedImage && (
          <div className="modal fade show" style={{display: 'block'}} onClick={closeModal}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h5 className="modal-title">{selectedImage.alt}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <img src={selectedImage.src} alt={selectedImage.alt} className="img-fluid" />
                  <p className="mt-3">{selectedImage.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Galeria;