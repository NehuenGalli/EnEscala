import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import { SITE_CONFIG, getCanonicalUrl } from '../config/siteConfig';
import './PrivacyPolicyPage.css';

export default function PrivacyPolicyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de privacidad y cookies',
    description: 'Información sobre privacidad, cookies, analítica y contacto en el sitio web de Reel Arquitectura.',
    url: getCanonicalUrl('/politica-de-privacidad'),
    publisher: {
      '@type': 'ArchitecturalFirm',
      name: SITE_CONFIG.siteName,
      email: SITE_CONFIG.contact.email,
      url: SITE_CONFIG.siteUrl,
    },
  };

  return (
    <>
      <SEO
        title={`Política de privacidad y cookies | ${SITE_CONFIG.siteName}`}
        description="Conocé cómo Reel Arquitectura utiliza datos de contacto, cookies, analítica y herramientas publicitarias en su sitio web."
        schema={schema}
      />
      <Navbar />
      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="container privacy-hero__inner">
            <span className="section-tag">Privacidad</span>
            <h1 className="privacy-hero__title">Política de privacidad y cookies</h1>
            <p className="privacy-hero__text">
              Esta página resume cómo tratamos la información enviada desde el sitio y cómo usamos cookies para medición y futuras campañas.
            </p>
          </div>
        </section>

        <section className="privacy-content">
          <div className="container privacy-content__inner">
            <article className="privacy-block">
              <h2>Responsable del sitio</h2>
              <p>
                Este sitio pertenece a Reel Arquitectura, estudio de arquitectura ubicado en AMBA, Buenos Aires, Argentina.
                Para consultas sobre privacidad o datos personales podés escribir a{' '}
                <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>.
              </p>
            </article>

            <article className="privacy-block">
              <h2>Datos de contacto</h2>
              <p>
                Cuando completás el formulario de contacto, el sitio abre una conversación de WhatsApp con el mensaje que escribiste.
                La web no almacena ese mensaje en una base de datos propia. La comunicación continúa dentro de WhatsApp, bajo sus propias condiciones y políticas.
              </p>
            </article>

            <article className="privacy-block">
              <h2>Cookies y analítica</h2>
              <p>
                Podemos utilizar herramientas como Google Analytics, Google Tag Manager y Meta Pixel para medir visitas,
                entender qué páginas se consultan y mejorar la experiencia del sitio. Estas herramientas pueden usar cookies u otras tecnologías similares.
              </p>
            </article>

            <article className="privacy-block">
              <h2>Publicidad</h2>
              <p>
                En futuras campañas de Google Ads o Meta Ads, las cookies y etiquetas pueden ayudarnos a medir conversiones como clicks en WhatsApp,
                email, Instagram o páginas de servicios. Estos datos se usan de forma agregada para evaluar el rendimiento de los anuncios.
              </p>
            </article>

            <article className="privacy-block">
              <h2>Gestión desde el navegador</h2>
              <p>
                Podés bloquear o borrar cookies desde la configuración de tu navegador. Tené en cuenta que algunas mediciones o funciones externas pueden
                verse limitadas si bloqueás estas tecnologías.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
