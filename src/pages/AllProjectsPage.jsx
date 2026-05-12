import './AllProjectsPage.css';
import { useState } from 'react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const categories = ['Todos', 'Residencial', 'Comercial', 'Institucional'];

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      
      <main className="all-projects">
        <div className="all-projects__header section section--dark">
          <div className="container">
            <span className="section-tag section-tag--light">Portafolio</span>
            <h1 className="section-title section-title--light">Todos los Proyectos</h1>
            <p className="section-subtitle section-subtitle--light" style={{maxWidth: '800px', margin: '0'}}>
              Explorá nuestro archivo completo de obras y proyectos. Cada diseño refleja nuestro compromiso con la calidad espacial y constructiva.
            </p>
          </div>
        </div>

        <div className="container section">
          {/* Filters */}
          <div className="all-projects__filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`all-projects__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="all-projects__grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="all-projects__empty">No hay proyectos en esta categoría por el momento.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
