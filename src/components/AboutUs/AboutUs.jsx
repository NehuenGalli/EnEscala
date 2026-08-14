import './AboutUs.css';
import { useInView } from '../../hooks/useInView';

const values = [
  {
    title: 'RESPONSABILIDAD',
    // subtitle: 'CONSTRUIMOS',
    text: 'Para encarar cualquier trabajo, porque somos consientes de la importancia de cada emprendimiento.',
  },
  {
    title: 'EMPATÍA',
    // subtitle: 'CONCRETAMOS',
    text: 'Para entender tus gustos y necesidades y acompañarte de la mejor manera posible durante todo el proceso que nos toca compartir.',
  },
  {
    title: 'PROFESIONALISMO',
    // subtitle: 'CREAMOS',
    text: 'Abalado por los años de experiencia y una capacitación constante en nuevas tendencias y materiales, para lograr la satisfacción del cliente en cada trabajo.',
  },
];

export default function AboutUs() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.15, once: true });
  const [cardsRef, areCardsInView] = useInView({ threshold: 0.2, once: true });

  return (
    <section id="nosotros" className="section about">
      <div className="container about__container">
        <div 
          ref={sectionRef} 
          className={`about__header reveal-init ${isSectionInView ? 'reveal-visible' : ''}`}
        >
          <span className="section-tag">Sobre nosotros</span>
          <h2 className="section-title">Quienes somos</h2>
          <div className="divider" />
          <p className="section-subtitle">
            El estudio EnEscala se localiza en la zona sur del gran Bs. As. y lo integramos los arquitectos Maximiliano Gallitelli y Rodolfo Diez con más de 20 años de experiencia en el ejercicio de la arquitectura y con el entusiasmo constante para llevar a cabo de manera eficiente nuestra labor con…
          </p>
        </div>

        <div 
          ref={cardsRef} 
          className={`about__values stagger-parent ${areCardsInView ? 'is-visible' : ''}`}
        >
          {values.map((v, i) => (
            <div key={i} className="about__value-card">
              <h3 className="about__value-title">{v.title}</h3>
              <div className="about__value-line" aria-hidden="true" />
              <h4 className="about__value-subtitle">{v.subtitle}</h4>
              <p className="about__value-text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
