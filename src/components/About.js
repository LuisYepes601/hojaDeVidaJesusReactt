import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const GoHome = () => {
      const btn_home = document.querySelector(".btn-home");
      if (btn_home) {
        btn_home.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = "/";
        });
      }
    };

    const mostrarSkills = () => {
      const btn_skills = document.querySelectorAll(".button-show-skills");
      if (btn_skills.length > 0) {
        btn_skills.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "#skills";
          });
        });
      }
    };

    const goProyectos = () => {
      const ver_mis_proyectos = document.querySelectorAll(".seccion-proyectos");
      if (ver_mis_proyectos.length > 0) {
        ver_mis_proyectos.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "proyectos.html";
          });
        });
      }
    };

    GoHome();
    mostrarSkills();
    goProyectos();

    return () => {
      // Cleanup event listeners if needed
    };
  }, []);

  return (
    <main className="main-home">
      <section className="contenido-principal-home">
        <div className="contenido-principal-home-info">
          <h3 className="contenido-principal-home-info-nombre">Hola, soy Jesus Ballesteros <span className="manito"><i className="fa-regular fa-hand-peace"></i></span></h3>
          <p className="contenido-principal-home-info-descripcion-about">Soy estudiante y entusiasta del desarrollo web, con interés en crear interfaces modernas, intuitivas y eficientes. Me motiva aprender y mejorar constantemente mis habilidades en HTML, CSS y JavaScript para crecer como desarrollador.
            Mi meta es aportar con proyectos que generen impacto positivo, en especial en la educación y el cuidado del medio ambiente. Más allá de la programación, disfruto explorar nuevas ideas, aprender de distintos campos y superarme cada día.</p>
          <div className="contenido-principal-home-botones">
            <button className="button-show-skills">Conoce mis Skills</button>
          </div>
        </div>
      </section>

      <section className="estudios">
        <h2>Mis estudios</h2>
        <div className="estudios-info">
          <div className="estudios-info-tarjeta">
            <h4 className="name-inst">Universidad de Cartagena</h4>
            <img src="/img/logo.jpg" alt="logo de la institucion de la Universidad de Cartagena" className="estudios-info-tarjeta-logo" />
            <div className="fecha-estudios">
              <p>Fecha de inicio:</p><input type="text" name="" id="" value="15/07/2023" readOnly />
              <p>Estado:</p> <input type="text" name="" id="" value="EN FORMACION" readOnly />
              <p>Nivel de formación:</p> <input type="text" name="" id="" value="PREGRADO" readOnly />
              <label htmlFor="titulo-obtenido">
                <p>Titulo obtenido</p>
              </label>
              <textarea name="" id="titulo-obtenido" readOnly className="titulo-obtenido">INGENIERO DE SOFTWARE</textarea>
            </div>
          </div>
        </div>
      </section>

      <section className="mi-proposito">
        <h2><span>Mi</span> proposito</h2>
        <p className="mi-proposito-descripcion">Mi propósito es seguir creciendo como <span>desarrollador</span>, explorando nuevas <span>tecnologías</span> y aplicándolas en proyectos que aporten <span>soluciones</span> prácticas y significativas para las personas.</p>
      </section>

      <section className="skills" id="skills">
        <div className="skills-contenido">
          <h2 className="skills-contenido-titulo">Skills</h2>
          <div className="skills-contenido-secciones">
            <div className="front-end">
              <h2>Front-end</h2>
              <ul>
                <li><i className="fa-brands fa-php"></i></li>
                <li><i className="fa-brands fa-html5"></i></li>
                <li><i className="fa-brands fa-css3-alt"></i></li>
              </ul>
            </div>
            <div className="back-end">
              <h2>Back-end</h2>
              <ul>
                <li><i className="fa-brands fa-java"></i></li>
                <li><i className="fa-brands fa-docker"></i></li>
                <li><i className="fa-brands fa-python"></i></li>
              </ul>
            </div>
            <div className="soft-skills">
              <h2>Soft skills</h2>
              <ul>
                <li><i className="fa-solid fa-people-group"></i></li>
                <li><i className="fa-solid fa-palette"></i></li>
                <li><i className="fa-solid fa-business-time"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
