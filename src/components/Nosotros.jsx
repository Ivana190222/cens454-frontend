import React from 'react';
import './Nosotros.css';

const Nosotros = () => (
  <section id="nosotros">
    <div className="nosotros-container">
      <h2>Sobre Nosotros</h2>
      <div className="nosotros-content">
        <div className="mision-vision">
          <div className="card">
            <div className="card-header">
              <i className="icon mission-icon"></i>
              <h3>Nuestra Misión</h3>
            </div>
            <p>
              Brindar educación de calidad a personas adultas, promoviendo un ambiente de aprendizaje 
              inclusivo donde cada estudiante pueda desarrollar su potencial académico y personal.
            </p>
          </div>
          
          <div className="card">
            <div className="card-header">
              <i className="icon vision-icon"></i>
              <h3>Nuestra Visión</h3>
            </div>
            <p>
              Ser reconocidos como una institución de referencia en la educación de adultos, 
              formando ciudadanos comprometidos con su comunidad y preparados para afrontar 
              los desafíos del mundo actual.
            </p>
          </div>
        </div>
        
        <div className="valores">
          <h3>Nuestros Valores</h3>
          <ul className="valores-list">
            <li>
              <span className="valor-title">Respeto</span>
              <p>Fomentamos un ambiente de respeto mutuo entre todos los miembros de nuestra comunidad educativa.</p>
            </li>
            <li>
              <span className="valor-title">Compromiso</span>
              <p>Estamos comprometidos con la educación de calidad y el desarrollo integral de nuestros estudiantes.</p>
            </li>
            <li>
              <span className="valor-title">Inclusión</span>
              <p>Promovemos una educación inclusiva que respeta la diversidad y las necesidades individuales.</p>
            </li>
            <li>
              <span className="valor-title">Excelencia</span>
              <p>Buscamos la excelencia académica a través de la innovación y la mejora continua.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Nosotros;