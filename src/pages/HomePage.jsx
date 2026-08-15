import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const targetId = location.state.scrollToId;
      // Limpiar el state del historial para que al volver atrás con el navegador no re-ejecute el scroll
      window.history.replaceState({}, document.title);

      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const navbarHeight = 72;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
