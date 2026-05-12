import './Hero.css';
import heroBg from '../../assets/hero-bg.jpg';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="Sección principal"
    >
      {/* Overlay gradiente */}
      <div className="hero__overlay" />

      <div className="container hero__content">
        {/* Tag */}
        <span className="hero__tag">Estudio de Arquitectura</span>

        {/* Heading */}
        <h1 className="hero__title">
          Diseñamos<br />
          <span className="hero__title--accent">espacios</span> que<br />
          trascienden.
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle">
          Transformamos ideas en obras. Arquitectura contemporánea con identidad, precisión técnica y atención al detalle.
        </p>

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
