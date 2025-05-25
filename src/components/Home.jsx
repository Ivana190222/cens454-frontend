import React from 'react';

const Home = () => {
  return (
    <section id="home" className="pt-20 pb-16">
      <div className="bg-dark-gradient min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
                <span className="text-[#D6A520]">CENS</span> 454
              </h1>
              <h2 className="text-xl md:text-2xl font-light text-light/90 mb-4">Centro Educativo de Nivel Secundario</h2>
              <p className="text-lg font-medium text-[#D6A520] mb-6 italic">
                Donde tu futuro comienza hoy
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-dark-lighter p-4 rounded-md border-l-4 border-[#D6A520] shadow-gold-sm backdrop-blur-sm">
                  <p className="text-light/90">
                    En CENS 454 ofrecemos una <span className="text-[#D6A520] font-semibold">educación de calidad</span> para adultos
                    que desean completar sus estudios secundarios en un ambiente flexible y de apoyo.
                  </p>
                </div>
                <div className="bg-dark-lighter p-4 rounded-md border-l-4 border-[#FFD700] shadow-gold-sm backdrop-blur-sm">
                  <p className="text-light/90">
                    Nos enfocamos en el <span className="text-[#D6A520] font-semibold">crecimiento personal y profesional</span> de nuestros estudiantes,
                    brindándoles las herramientas necesarias para alcanzar sus metas.
                  </p>
                </div>
                <div className="bg-dark-lighter p-4 rounded-md border-l-4 border-[#D6A520] shadow-gold-sm backdrop-blur-sm">
                  <p className="text-light/90">
                    Con más de 20 años de experiencia, nuestro equipo docente está comprometido
                    con tu éxito académico.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contacto" 
                  className="bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-dark px-6 py-3 rounded-md font-medium hover:bg-gradient-to-l transition-all duration-300 shadow-gold transform hover:scale-105"
                >
                  Inscríbete Ahora
                </a>
                <a 
                  href="#nosotros" 
                  className="bg-dark-lighter text-[#D6A520] border-2 border-[#D6A520] px-6 py-3 rounded-md font-medium hover:bg-[rgba(214,165,32,0.1)] hover:text-[#FFD700] hover:border-[#FFD700] transition-all duration-300 shadow-gold-sm"
                >
                  Conoce Más
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-dark-lighter rounded-lg shadow-gold p-6 border border-[#D6A520]/20">
                <h3 className="text-xl font-bold text-[#D6A520] mb-4">
                  ¿Por qué elegirnos?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Docentes altamente calificados",
                    "Horarios flexibles adaptados a tu rutina",
                    "Apoyo personalizado en tu trayecto educativo",
                    "Enfoque en habilidades prácticas",
                    "Comunidad inclusiva y acogedora"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-[#D6A520] flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;