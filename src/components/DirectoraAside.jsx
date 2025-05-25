import React from 'react';
import './DirectoraAside.css';
import Alumnos1 from '../assets/Dir cens.jpeg'; // Temporalmente usamos esta imagen

const DirectoraAside = () => {
  // Array con ejemplos de publicidad o noticias
  const anuncios = [
    {
      title: "Inscripciones Abiertas",
      content: "Inscripciones abiertas para el ciclo lectivo 2024. ¡Consulta los requisitos!",
      link: "#contacto"
    },
    {
      title: "Nuevos Talleres",
      content: "Próximamente nuevos talleres de formación profesional. ¡Mantente atento!",
      link: "#contacto"
    },
    {
      title: "Horarios de Atención",
      content: "Recuerda que atendemos de lunes a viernes de 18:00 a 22:00 hs.",
      link: "#contacto"
    }
  ];

  return (
    <aside className="directora-aside" data-aos="fade-left">
      <div className="container">
        <div className="directora-section">
          <h3 data-aos="fade-up">Palabras de la Directora</h3>
          <div className="directora-content" data-aos="fade-up" data-aos-delay="100">
            <div className="directora-img">
              <img src={Alumnos1} alt="Directora de CENS 454" />
            </div>
            <div className="directora-text">
              <h4>Dir. Laura Carolina Morán</h4>
              <p>
                "Nuestra misión es brindar educación de calidad para adultos, en un espacio 
                inclusivo y de contención. Creemos firmemente que nunca es tarde para estudiar 
                y que la educación es el camino para transformar vidas."
              </p>
              <p>
                "Te invitamos a formar parte de nuestra comunidad educativa y dar 
                un paso importante hacia tu futuro."
              </p>
              <a href="#contacto" className="btn-contacto">Contáctanos</a>
            </div>
          </div>
        </div>

        <div className="publicidad-section">
          <h3 data-aos="fade-up">Noticias y Anuncios</h3>
          <div className="anuncios-container">
            {anuncios.map((anuncio, index) => (
              <div className="anuncio-card" key={index} data-aos="zoom-in" data-aos-delay={100 + (index * 50)}>
                <h4>{anuncio.title}</h4>
                <p>{anuncio.content}</p>
                <a href={anuncio.link} className="btn-anuncio">Más información</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DirectoraAside; 