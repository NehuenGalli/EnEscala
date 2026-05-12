import './ProjectCard.css';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../assets/hero-bg.jpg';

export default function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate();
  const image = project.image || heroBg;

  return (
    <article
      className="project-card"
      id={`project-${project.slug}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => navigate(`/proyecto/${project.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && navigate(`/proyecto/${project.slug}`)}
      aria-label={`Ver proyecto: ${project.title}`}
    >
      {/* Image */}
      <div className="project-card__img-wrap">
        <img
          src={image}
          alt={project.title}
          className="project-card__img"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="project-card__overlay">
          <span className="project-card__overlay-btn">Ver proyecto →</span>
        </div>
        {/* Category badge */}
        <span className="project-card__badge">{project.category}</span>
      </div>

      {/* Info */}
      <div className="project-card__info">
        <div className="project-card__meta">
          <span className="project-card__type">{project.type}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__area">{project.area} · {project.location}</p>
        <p className="project-card__desc">{project.description}</p>
      </div>
    </article>
  );
}
