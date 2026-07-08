import './Services.css';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';

// Ícono genérico y moderno de arquitectura/diseño
const dummyIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container container__services">
        {/* Header */}
        <div className="services__header">
          <span className="section-tag">Lo que hacemos</span>
          <h2 className="section-title">Nuestras soluciones</h2>
          <div className="divider" />
        </div>

        {/* Cards grid */}
        <div className="services__grid">
          {servicesData.map(s => (
            <article key={s.id} className="service-item">
              <div className="service-item__icon">{dummyIcon}</div>
              <h3 className="service-item__title">{s.title}</h3>
              <p className="service-item__desc">{s.descriptionCard}</p>
              <Link to={`/servicio/${s.slug}`} className="service-item__btn">
                Ver más &rarr;
              </Link>
              <div className="divider__card"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
