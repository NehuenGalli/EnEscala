import './Contact.css';

export default function Contact() {
  return (
    <section id="contacto" className="section section--dark contact-sec">
      <div className="container">
        <div className="contact-sec__inner">
          {/* Form Side */}
          <div className="contact-sec__form-side">
            <span className="section-tag section-tag--light">Hablemos</span>
            <h2 className="section-title section-title--light">Contactanos</h2>
            <div className="divider" />
            <p className="section-subtitle section-subtitle--light">
              Dejanos tu consulta y nos comunicaremos a la brevedad para asesorarte.
            </p>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Formulario de demostración. No se enviaron datos.');
              }}
            >
              <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">Nombre completo</label>
                <input type="text" id="name" className="contact-form__input" placeholder="Tu nombre" required />
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="email" className="contact-form__label">Email</label>
                  <input type="email" id="email" className="contact-form__input" placeholder="tu@email.com" required />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="phone" className="contact-form__label">Teléfono</label>
                  <input type="tel" id="phone" className="contact-form__input" placeholder="+54 9 11..." />
                </div>
              </div>

              <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">Mensaje</label>
                <textarea id="message" className="contact-form__input contact-form__textarea" placeholder="Contanos sobre tu proyecto..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary contact-form__submit">
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="contact-sec__info-side">
            <div className="contact-info-card">
              <h3 className="contact-info-card__title">Información de contacto</h3>

              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-info-label">Teléfono</span>
                    <a href="tel:+541112345678" className="contact-info-value">+54 11 1234-5678</a>
                  </div>
                </li>

                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:hola@enescala.com.ar" className="contact-info-value">hola@gmail.com</a>
                  </div>
                </li>

                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-info-label">Estudio</span>
                    <span className="contact-info-value">CABA, Buenos Aires, Argentina</span>
                  </div>
                </li>
              </ul>

              <div className="contact-social">
                <span className="contact-social__title">Seguinos</span>
                <div className="contact-social__links">
                  <a href="#instagram" className="contact-social__link" aria-label="Instagram">
                    @Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
