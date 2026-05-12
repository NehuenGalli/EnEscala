import './AboutUs.css';

const values = [
  {
    title: 'PROFESIONALISMO',
    subtitle: 'CONSTRUIMOS',
    text: 'Desde el primer día basados en la autoexigencia y la determinación por lograr procesos de calidad en cada detalle, cumpliendo con los más altos estándares del rubro.',
  },
  {
    title: 'RESPONSABILIDAD',
    subtitle: 'CONCRETAMOS',
    text: 'A partir de la eficiencia, hacemos que cada minuto y cada decisión se transformen en resultados reales y demostrables, cumplimiento con plazos, calidad y acuerdos pactados, honrando el valor del tiempo y de la confianza.',
  },
  {
    title: 'SATISFACCIÓN',
    subtitle: 'CREAMOS',
    text: 'Transformando una idea en espacios capaces de cambiarle la vida a las personas, empresas y a la sociedad. Evaluamos nuestro éxito en hogares y espacios urbanos disfrutados, más que en la medición de los metros cuadrados construidos.',
  },
];

export default function AboutUs() {
  return (
    <section id="nosotros" className="section about">
      <div className="container about__container">
        <div className="about__values">
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
