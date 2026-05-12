import './ProjectsSection.css';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  const navigate = useNavigate();
  // Mostrar solo los proyectos destacados en la home (max 3)
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section id="proyectos" className="section projects-sec">
      <div className="container">
        {/* Header */}
        <div className="projects-sec__header">
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
        <div className="projects-sec__grid">
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
