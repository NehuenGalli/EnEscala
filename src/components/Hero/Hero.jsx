import './Hero.css';
import { useState, useEffect } from 'react';
import bgOption1 from '../../assets/test1.png';
import bgOption2 from '../../assets/test2.png';
import bgOption3 from '../../assets/test3.png';

const backgrounds = [bgOption1, bgOption2, bgOption3];

export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="hero"
      aria-label="Sección principal"
    >
      {/* Background Slides with crossfade transition */}
      <div className="hero__backgrounds" aria-hidden="true">
        {backgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`hero__bg-slide ${idx === currentBgIndex ? 'hero__bg-slide--active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>

      {/* Overlay gradiente */}
      <div className="hero__overlay" />

      <div className="container hero__content">

        {/* Heading */}
        <h1 className="hero__title">
          <span className="hero__title-line">Diseñamos con tus</span>
          <span className="hero__title-line">
            <span className="hero__title--accent">ideas</span> los espacios
          </span>
          <span className="hero__title-line">de tu futuro</span>
        </h1>

        {/* Tag */}
        <span className="hero__tag">EnEscala, Estudio de Arquitectura</span>

        {/* CTA buttons */}
        <div className="hero__actions">
          <button
            className="btn btn-primary"
            onClick={() => handleScrollTo('proyectos')}
          >
            Ver Proyectos
          </button>
          <button
            className="btn btn-outline"
            onClick={() => handleScrollTo('contacto')}
          >
            Contactanos
          </button>
        </div>
      </div>

      {/* Selector interactivo para cambiar entre los dos fondos */}
      <div className="hero__bg-controls" aria-label="Cambiar fondo">
        {backgrounds.map((_, idx) => (
          <button
            key={idx}
            className={`hero__bg-dot ${idx === currentBgIndex ? 'hero__bg-dot--active' : ''}`}
            onClick={() => setCurrentBgIndex(idx)}
            aria-label={`Ver fondo opción ${idx + 1}`}
            title={`Opción ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-label">Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      {/* Stats bar */}
      {/* <div className="hero__stats">
        <div className="container hero__stats-inner">
          <div className="hero__stat">
            <span className="hero__stat-number">+50</span>
            <span className="hero__stat-label">Proyectos realizados</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">+15</span>
            <span className="hero__stat-label">Años de experiencia</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">+40</span>
            <span className="hero__stat-label">Clientes satisfechos</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">3</span>
            <span className="hero__stat-label">Premios de diseño</span>
          </div>
        </div>
      </div> */}
    </section>
  );
}
