import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [hiding, setHiding] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Iniciar el cierre suave después de 2.2s (más lento y elegante)
    const timer1 = setTimeout(() => {
      setHiding(true);
    }, 2200);

    // Remover del DOM al finalizar la transición (2.8s)
    const timer2 = setTimeout(() => {
      setRemoved(true);
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (removed) return null;

  return (
    <div className={`preloader ${hiding ? 'preloader--hiding' : ''}`} aria-hidden="true">
      <div className="preloader__content">
        {/* Contenedor del Logo E_solo animado */}
        <div className="preloader__logo-wrap">
          <svg
            className="preloader__logo-e"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="35 0 170 130"
          >
            <g>
              {/* Cara lateral derecha 3D (oscura) */}
              <polygon className="e-part e-dark" points="190.89,80.95 190.89,95.55 139.76,125 139.76,95.8 139.76,80.1 139.76,66.11 139.76,52.11 139.76,51.28 139.76,32.78 139.76,7.21 190.89,36.66 190.89,49.46 167.15,41.7 167.15,51.23 167.15,55.85 190.89,59.09 190.89,73.12 167.15,76.37 167.15,79.37 167.15,87.86" fill="#4B4E4B" />
              <polygon className="e-part e-shadow1" points="190.89,49.46 167.15,51.23 167.15,41.7" fill="#7C7D7D" />
              <polygon className="e-part e-shadow2" points="190.89,80.95 167.15,87.86 167.15,79.37" fill="#7C7D7D" />

              {/* Cara frontal principal (verde lima brand) */}
              <polygon className="e-part e-front" points="139.76,95.8 139.76,125 46.45,92.99 46.45,39.22 139.76,7.21 139.76,32.78 73.73,45.61 73.73,57.48 139.76,52.11 139.76,66.11 139.76,80.1 134.74,79.7 73.73,74.73 73.73,84.39" fill="#CCD12E" />

              {/* Sombras y profundidad interior */}
              <polygon className="e-part e-inner1" points="139.76,80.1 139.76,95.8 73.73,84.39 134.74,79.7" fill="#7C7D7D" />
              <polygon className="e-part e-inner2" points="139.76,51.28 139.76,52.11 73.73,57.48 73.73,45.61" fill="#4B4E4B" />
              <polygon className="e-part e-inner3" points="139.76,32.78 139.76,51.28 73.73,45.61" fill="#7C7D7D" />
              <polygon className="e-part e-inner4" points="134.74,79.7 73.73,84.39 73.73,74.73" fill="#4B4E4B" />
            </g>
          </svg>
          <div className="preloader__glow" />
        </div>

        {/* Texto de Marca */}
        <div className="preloader__text">
          <span className="preloader__title">EN ESCALA</span>
          <span className="preloader__subtitle">ARQUITECTURA</span>
        </div>

        {/* Barra de Progreso */}
        <div className="preloader__bar-container">
          <div className="preloader__bar-fill" />
        </div>
      </div>
    </div>
  );
}
