import React, { useState } from 'react';
import './Contacto.css';
import Swal from 'sweetalert2';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mostrar SweetAlert2
    Swal.fire({
      title: '¡Mensaje Enviado!',
      text: 'Gracias por contactarnos, nos comunicaremos contigo pronto.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#D6A520',
      background: '#1E1E1E',
      color: '#F8F7F1',
      iconColor: '#FFD700',
    });
    
    // Enviar el formulario
    const form = e.target;
    const formAction = form.action;
    const formData = new FormData(form);
    
    fetch(formAction, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
      .then(() => {
        setSubmitted(true);
        // Limpiar el formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: ''
        });
      })
      .catch(error => {
        console.error('Error al enviar el formulario:', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#D6A520',
          background: '#1E1E1E',
          color: '#F8F7F1',
        });
      });
  };
  
  return (
    <section id="contacto">
      <div className="contacto-container">
        <h2>Contáctanos</h2>
        
        <div className="contacto-content">
          <div className="contacto-info">
            <div className="info-card">
              <div className="info-icon location"></div>
              <div>
                <h3>Dirección</h3>
                <p>529 N°3888, Quequén, Necochea, Buenos Aires</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon phone"></div>
              <div>
                <h3>Teléfono</h3>
                <p>(2262) 610058</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon email"></div>
              <div>
                <h3>Email</h3>
                <p>cens454necochea@abc.gob.ar</p>
              </div>
            </div>
            
            <div className="horario">
              <h3>Horario de Atención</h3>
              <p><strong>Lunes a Viernes:</strong> 18:00 - 22:00</p>
            </div>
            
            <div className="social-media">
              <h3>Síguenos</h3>
              <div className="social-icons">
                <a 
                  href="https://www.facebook.com/cens.quequen.5" 
                  className="social-icon facebook" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook del CENS 454"
                >
                  <span className="sr-only">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/cens454_quequen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  className="social-icon instagram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram del CENS 454"
                >
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contacto-form">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon"></div>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarnos, nos comunicaremos contigo pronto.</p>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/cens454necochea@abc.gob.ar" 
                method="POST" 
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nueva consulta desde la web" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Enviar Mensaje</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;