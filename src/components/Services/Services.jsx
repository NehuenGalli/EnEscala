import './Services.css';

// Ícono genérico y moderno de arquitectura/diseño
const dummyIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

// Objeto base para clonarlo según lo pedido
const serviceBase = {
  icon: dummyIcon,
  title: 'Proyecto y Dirección de Obra',
  description: 'Desarrollamos el anteproyecto, proyecto ejecutivo y conducimos la obra hasta su entrega. Un equipo técnico integrado asegura coherencia entre diseño y construcción.'
};

const services = [
  { ...serviceBase, id: 'srv-1' },
  { ...serviceBase, id: 'srv-2' },
  { ...serviceBase, id: 'srv-3' },
  { ...serviceBase, id: 'srv-4' },
  { ...serviceBase, id: 'srv-5' },
  { ...serviceBase, id: 'srv-6' }
];

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container container__services">
        {/* Header */}
        <div className="services__header">
          <span className="section-tag">Lo que hacemos</span>
          <h2 className="section-title">Nuestras soluciones</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, iure.
          </p>
        </div>

        {/* Cards grid */}
        <div className="services__grid">
          {services.map(s => (
            <article key={s.id} className="service-item">
              <div className="service-item__icon">{s.icon}</div>
              <h3 className="service-item__title">{s.title}</h3>
              <p className="service-item__desc">{s.description}</p>
              <div className="divider__card"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
