import './ProjectsSection.css';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import { useInView } from '../../hooks/useInView';

export default function ProjectsSection() {
  const navigate = useNavigate();
  // Mostrar solo los proyectos destacados en la home (max 3)
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.2, once: true });
  const [gridRef, isGridInView] = useInView({ threshold: 0.1, once: true });

  return (
    <section id="proyectos" className="section projects-sec">
      <div className="container">
        {/* Header */}
        <div 
          ref={headerRef} 
          className={`projects-sec__header reveal-init ${isHeaderInView ? 'reveal-visible' : ''}`}
        >
          <div>
            <span className="section-tag">Nuestro Trabajo</span>
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="divider" />
          </div>
          <button 
            className="btn btn-outline--dark btn btn-outline" 
            onClick={() => navigate('/proyectos')}
          >
            Ver todos los proyectos
          </button>
        </div>

        {/* Grid */}
        <div 
          ref={gridRef} 
          className={`projects-sec__grid stagger-parent ${isGridInView ? 'is-visible' : ''}`}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile button */}
        <div className="projects-sec__mobile-action">
          <button 
            className="btn btn-outline--dark btn btn-outline" 
            onClick={() => navigate('/proyectos')}
          >
            Ver todos los proyectos
          </button>
        </div>
      </div>
    </section>
  );
}
