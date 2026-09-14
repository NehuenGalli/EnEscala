import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import { SITE_CONFIG, getCanonicalUrl } from '../config/siteConfig';

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

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ArchitecturalFirm'],
    'name': SITE_CONFIG.siteName,
    'description': SITE_CONFIG.defaultDescription,
    'url': getCanonicalUrl('/'),
    'telephone': SITE_CONFIG.contact.phone,
    'email': SITE_CONFIG.contact.email,
    'image': `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultSocialImage}`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': SITE_CONFIG.contact.addressLocality,
      'addressRegion': SITE_CONFIG.contact.addressRegion,
      'addressCountry': SITE_CONFIG.contact.addressCountry,
    },
    'areaServed': SITE_CONFIG.serviceAreas.map(area => ({
      '@type': 'AdministrativeArea',
      'name': area
    })),
    'founder': SITE_CONFIG.architects.map(arch => ({
      '@type': 'Person',
      'name': arch.name,
      'jobTitle': arch.role
    })),
    'sameAs': [
      SITE_CONFIG.contact.instagram
    ]
  };

  return (
    <>
      <SEO
        title="Reel Arquitectura | Estudio de Arquitectura y Dirección de Obra"
        description="Reel Arquitectura. Estudio especializado en diseño, proyecto, construcción, remodelación y dirección de obra en AMBA, Buenos Aires."
        image={SITE_CONFIG.defaultSocialImage}
        imageWidth={SITE_CONFIG.defaultSocialImageWidth}
        imageHeight={SITE_CONFIG.defaultSocialImageHeight}
        imageType={SITE_CONFIG.defaultSocialImageType}
        schema={homeSchema}
      />
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
