import './Footer.css';
import logoE from '../../assets/Logo EN ESCALA TEXTO F.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logoE} alt="En Escala Logo" className="footer__logo" />
            <p className="footer__desc">
              El estudio EnEscala se localiza en la zona sur del gran Bs. As. y lo integramos los arquitectos Maximiliano Gallitelli y Rodolfo Diez con más de 20 años de experiencia en el ejercicio de la arquitectura
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__nav">
              <h4 className="footer__title">Navegación</h4>
              <ul>
                <li><a href="/#inicio">Inicio</a></li>
                <li><a href="/#nosotros">Nosotros</a></li>
                <li><a href="/#servicios">Servicios</a></li>
                <li><a href="/#proyectos">Proyectos</a></li>
                <li><a href="/#contacto">Contacto</a></li>
              </ul>
            </div>

            <div className="footer__social">
              <h4 className="footer__title">Redes Sociales</h4>
              <ul>
                <li><a href="#instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                {/* <li><a href="#linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {currentYear} EnEscala Arquitectura. Todos los derechos reservados.
          </p>
          {/* <p className="footer__credits">
            Diseño por <span className="footer__credits-name">En Escala</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
