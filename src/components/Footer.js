import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-contenido">
        <div className="footer-about">
          <h3>Sobre mí</h3>
          <p>Soy Jesus, un entusiasta de la tecnología y el desarrollo de software. Mi propósito es diseñar soluciones digitales innovadoras que generen valor y mejoren la vida de las personas, siempre con la mirada puesta en el aprendizaje y la evolución constante</p>
        </div>

        <div className="footer-links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><Link to="/"><i className="fa-solid fa-house"></i> Inicio</Link></li>
            <li><Link to="/about" className="btn-sobre-mi"><i className="fa-solid fa-user"></i> Sobre mí</Link></li>
          </ul>
        </div>

        <div className="footer-contacto">
          <h3>Contacto</h3>
          <p><i className="fa-solid fa-envelope"></i> <a href="mailto:jesusballestero00@gmail.com">jesusballestero00@gmail.com</a></p>
          <p><i className="fa-solid fa-phone"></i> <a href="https://wa.me/573126189160" target="_blank">+57 312 6189160</a></p>
        </div>
      </div>

      <div className="footer-copy">
        <p>&copy; 2025 Jesus Ballesteros - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
