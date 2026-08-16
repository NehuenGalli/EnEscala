import './AllProjectsPage.css';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import SEO from '../components/SEO/SEO';
import { getCanonicalUrl } from '../config/siteConfig';

export default function AllProjectsPage() {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Todos los Proyectos | En Escala Arquitectura',
    'description': 'Explorá nuestro archivo completo de obras y proyectos. Cada diseño refleja nuestro compromiso con la calidad espacial y constructiva.',
    'url': getCanonicalUrl('/proyectos'),
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Inicio',
          'item': getCanonicalUrl('/')
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Proyectos',
          'item': getCanonicalUrl('/proyectos')
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Todos los Proyectos | Portafolio de Obras"
        description="Explorá nuestro archivo completo de obras y proyectos. Cada diseño refleja nuestro compromiso con la calidad espacial y constructiva."
        schema={projectsSchema}
      />
      <ScrollToTop />
      <Navbar />

      <main className="all-projects">
        <div className="all-projects__header section section--dark">
          <div className="container">
            <span className="section-tag section-tag--light">Portafolio</span>
            <h1 className="section-title section-title--light">Todos los Proyectos</h1>
            <p className="section-subtitle section-subtitle--light" style={{ maxWidth: '800px', margin: '0' }}>
              Explorá nuestro archivo completo de obras y proyectos. Cada diseño refleja nuestro compromiso con la calidad espacial y constructiva.
            </p>
          </div>
        </div>

        <section className="all-projects__content">
          <div className="container">
            {/* Grid */}
            <div className="all-projects__grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {projects.length === 0 && (
              <p className="all-projects__empty">No hay proyectos en esta categoría por el momento.</p>
            )}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
