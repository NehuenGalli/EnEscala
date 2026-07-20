import './ServiceDetailPage.css';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import logoE from '../assets/logo-e.svg';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/#servicios" replace />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="service-detail-page">
        {/* Background blueprint section */}
        <section className="service-detail-hero">
          {/* Green accent band crossing horizontally */}
          <div className="service-detail-hero__band" />

          <div className="container service-detail-hero__container">
            {/* The transparent dark card */}
            <div className="service-detail-card">
              <header className="service-detail-card__header">
                <h1 className="service-detail-card__title">{service.title}:</h1>
              </header>

              <div className="service-detail-card__body">
                {/* Standard short description */}
                <p className="service-detail-card__description">
                  {service.description}
                </p>

                {/* Subsections if they exist (e.g. Construcción) */}
                {service.subSections && (
                  <div className="service-detail-card__subsections">
                    {service.subSections.map((sub, idx) => (
                      <p key={idx} className="service-detail-card__sub-item">
                        <strong>{sub.label}:</strong> {sub.text}
                      </p>
                    ))}
                  </div>
                )}

                {/* Deliverables / Tasks list */}
                {service.listItems && service.listItems.length > 0 && (
                  <div className="service-detail-card__list-section">
                    <h3 className="service-detail-card__list-title">
                      {service.listTitle}
                    </h3>
                    <ul className="service-detail-card__list">
                      {service.listItems.map((item, idx) => (
                        <li key={idx} className="service-detail-card__list-item">
                          <span className="list-item-check" aria-hidden="true">✓</span>
                          <span className="list-item-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom footer bar of card with E-logo */}
              <footer className="service-detail-card__footer">
                <Link to="/" state={{ scrollToId: 'servicios' }} className="service-detail-card__back-btn">
                  &larr; Volver a Servicios
                </Link>
                <img
                  src={logoE}
                  alt="En Escala Logo"
                  className="service-detail-card__logo"
                />
              </footer>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
