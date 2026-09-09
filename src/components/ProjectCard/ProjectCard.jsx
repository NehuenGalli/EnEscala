import './ProjectCard.css';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/test1.png';

export default function ProjectCard({ project, index = 0 }) {
  const image = project.image || heroBg;

  return (
    <Link
      to={`/proyecto/${project.slug}`}
      className="project-card"
      id={`project-${project.slug}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={`Ver proyecto: ${project.title}`}
    >
      {/* Image */}
      <div className="project-card__img-wrap">
        <img
          src={image}
          alt={`${project.title} - ${project.type} | En Escala Arquitectura`}
          className="project-card__img"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="project-card__overlay">
          <span className="project-card__overlay-btn">Ver proyecto →</span>
        </div>
      </div>

      {/* Info */}
      <div className="project-card__info">
        <div className="project-card__meta">
          <span className="project-card__type">{project.type}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__area">{project.location}</p>

        <div className="project-card__cta">
          <span>Ver proyecto</span>
          <span className="project-card__arrow" aria-hidden="true">&rarr;</span>
        </div>
      </div>
    </Link>
  );
}
