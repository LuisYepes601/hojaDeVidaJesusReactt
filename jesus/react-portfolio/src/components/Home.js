import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const goAbout = () => {
      const btn_sobre_mi = document.querySelectorAll(".btn-sobre-mi");
      if (btn_sobre_mi.length > 0) {
        btn_sobre_mi.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "/about";
          });
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

    goAbout();
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
          <h2 className="contenido-principal-home-info-carrera"><span>Ingeniero</span> de Software en formación</h2>
          <p className="contenido-principal-home-info-descripcion">Apasionado por el desarrollo de sistemas innovadores, con la misión de unir creatividad y tecnología en soluciones que marcan la diferencia.</p>
          <div className="contenido-principal-home-botones">
            <button className="button-show-skills">Conoce mis Skills</button>
          </div>
        </div>
        <div className="contenido-principal-home-foto">
          <img src="/img/circulo_recortado_original.png" alt="" className="foto-personal" />
        </div>
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
                <li><i className="fa-brands fa-node-js"></i></li>
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

export default Home;
