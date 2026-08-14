import './ProjectDetailPage.css';
import { useState, useEffect, useCallback } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import heroBg from '../assets/hero-bg.jpg';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryList = project?.gallery && project.gallery.length > 0
    ? project.gallery
    : (project?.image ? [project.image] : [heroBg]);

  const handlePrevImage = useCallback((e) => {
    e?.stopPropagation();
    setActiveImageIndex(prev => (prev === 0 ? galleryList.length - 1 : prev - 1));
  }, [galleryList.length]);

  const handleNextImage = useCallback((e) => {
    e?.stopPropagation();
    setActiveImageIndex(prev => (prev === galleryList.length - 1 ? 0 : prev + 1));
  }, [galleryList.length]);

  const handleCloseModal = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  // Keyboard navigation (Escape to close, Left/Right arrows to navigate)
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo con modal abierto

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeImageIndex, handleCloseModal, handlePrevImage, handleNextImage]);

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
            {/* <span className="project-detail__category">{project.category}</span> */}
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

        {/* Gallery */}
        <section className="project-detail__gallery">
          <div className="container">
            <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>Galería de Imágenes</h3>
            <div className="project-detail__gallery-grid">
              {galleryList.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="project-detail__gallery-item"
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={imgSrc} alt={`${project.title} - ${idx + 1}`} loading="lazy" />
                  <div className="project-detail__gallery-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div className="lightbox-modal" onClick={handleCloseModal}>
            <button
              className="lightbox-modal__close"
              onClick={handleCloseModal}
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            {galleryList.length > 1 && (
              <>
                <button
                  className="lightbox-modal__nav lightbox-modal__nav--prev"
                  onClick={handlePrevImage}
                  aria-label="Imagen anterior"
                >
                  &#10094;
                </button>
                <button
                  className="lightbox-modal__nav lightbox-modal__nav--next"
                  onClick={handleNextImage}
                  aria-label="Siguiente imagen"
                >
                  &#10095;
                </button>
              </>
            )}

            <div
              className="lightbox-modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryList[activeImageIndex]}
                alt={`${project.title} - vista ampliada ${activeImageIndex + 1}`}
                className="lightbox-modal__img"
              />
            </div>

            <div className="lightbox-modal__counter">
              {activeImageIndex + 1} / {galleryList.length}
            </div>
          </div>
        )}

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
