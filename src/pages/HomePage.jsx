import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
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
