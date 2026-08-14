import './Services.css';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';
import { useInView } from '../../hooks/useInView';

// Íconos SVG específicos para cada servicio
const serviceIcons = {
  'anteproyecto-y-documentacion': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="2" />
      <path d="m9.5 8.5-5 12.5" />
      <path d="m14.5 8.5 5 12.5" />
      <path d="M7.5 15h9" />
      <path d="M12 7v2" />
    </svg>
  ),
  'direccion-de-obra': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <path d="M10 10V4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V10" />
      <path d="M4 15a8 8 0 0 1 16 0" />
    </svg>
  ),
  'construccion-y-remodelacion': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4v18" />
      <path d="M19 21v-8l-7-3" />
      <path d="M9 9h.01" />
      <path d="M9 13h.01" />
      <path d="M9 17h.01" />
      <path d="M14 13h.01" />
      <path d="M14 17h.01" />
    </svg>
  ),
  'analisis-de-costos': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="7" y1="6" x2="17" y2="6" />
      <path d="M7 11h2" />
      <path d="M11 11h2" />
      <path d="M15 11h2" />
      <path d="M7 15h2" />
      <path d="M11 15h2" />
      <path d="M15 15h2" />
      <path d="M7 18h2" />
      <path d="M11 18h6" />
    </svg>
  ),
  'tramites-de-habilitaciones': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  ),
  'diseno-interior-y-mobiliarios': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v5" />
    </svg>
  ),
};

const defaultIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export default function Services() {
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.2, once: true });
  const [gridRef, isGridInView] = useInView({ threshold: 0.1, once: true });

  return (
    <section id="servicios" className="section services">
      <div className="container container__services">
        {/* Header */}
        <div 
          ref={headerRef} 
          className={`services__header reveal-init ${isHeaderInView ? 'reveal-visible' : ''}`}
        >
          <span className="section-tag">Lo que hacemos</span>
          <h2 className="section-title">Nuestras soluciones</h2>
          <div className="divider" />
        </div>

        {/* Cards grid */}
        <div 
          ref={gridRef} 
          className={`services__grid stagger-parent ${isGridInView ? 'is-visible' : ''}`}
        >
          {servicesData.map(s => (
            <article key={s.id} className="service-item">
              <div className="service-item__icon">
                {serviceIcons[s.slug] || defaultIcon}
              </div>
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
