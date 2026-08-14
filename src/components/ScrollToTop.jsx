import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, key } = useLocation();
  const navType = useNavigationType(); // 'POP' (back/forward), 'PUSH' (link click), or 'REPLACE'
  const scrollPositions = useRef({});

  // Guardar la posición de scroll antes de cambiar de página
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[key] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [key]);

  useEffect(() => {
    // Si el usuario usó el botón de "Atrás" o "Adelante" del navegador (POP)
    if (navType === 'POP') {
      const savedPosition = scrollPositions.current[key];
      if (savedPosition !== undefined) {
        window.scrollTo({
          top: savedPosition,
          left: 0,
          behavior: 'instant'
        });
        return;
      }
    }

    // Si es una navegación nueva (PUSH / click en enlace hacia otra página)
    if (navType === 'PUSH') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, key, navType]);

  return null;
}
