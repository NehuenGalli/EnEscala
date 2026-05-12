import './ProjectDetailPage.css';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import heroBg from '../assets/hero-bg.jpg';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  const image = project.image || heroBg;

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="project-detail">
        {/* Hero */}
        <header
          className="project-detail__hero"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="project-detail__hero-overlay" />
          <div className="container project-detail__hero-content">
            <span className="project-detail__category">{project.category}</span>
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__location">{project.location}</p>
          </div>
        </header>

        {/* Content */}
        <div className="container project-detail__content">
          <div className="project-detail__grid">
            {/* Meta Sidebar */}
            <aside className="project-detail__meta">
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Servicio</span>
                <span className="project-detail__meta-value">{project.type}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Año</span>
                <span className="project-detail__meta-value">{project.year}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Superficie</span>
                <span className="project-detail__meta-value">{project.area}</span>
              </div>
            </aside>

            {/* Main Info */}
            <article className="project-detail__info">
              <h2 className="project-detail__subtitle">Sobre el proyecto</h2>
              <div className="divider" />
              <p className="project-detail__text">{project.fullDescription}</p>
            </article>
          </div>
        </div>

        {/* Gallery Placeholder */}
        <section className="project-detail__gallery">
          <div className="container">
            <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>Galería de Imágenes</h3>
            <div className="project-detail__gallery-grid">
              {/* Aquí irían las imágenes del proyecto. Usamos la misma por ahora */}
              <div className="project-detail__gallery-item">
                <img src={image} alt="Vista 1" loading="lazy" />
              </div>
              <div className="project-detail__gallery-item">
                <img src={image} alt="Vista 2" loading="lazy" />
              </div>
              <div className="project-detail__gallery-item">
                <img src={image} alt="Vista 3" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Bottom */}
        <div className="project-detail__nav">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link to="/proyectos" className="btn btn-outline--dark btn btn-outline">
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
