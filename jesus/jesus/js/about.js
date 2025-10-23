

function GoHome() {
    const btn_home = document.querySelector(".btn-home");
    if (btn_home) {
        btn_home.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }
}

document.addEventListener("DOMContentLoaded", GoHome);

function mostrarSkills() {
    const btn_skills = document.querySelectorAll(".button-show-skills");
    if (btn_skills.length > 0) {
        btn_skills.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "#skills";
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", mostrarSkills);


function goProyectos() {
    const ver_mis_proyectos = document.querySelectorAll(".seccion-proyectos");
    if (ver_mis_proyectos.length > 0) {
        ver_mis_proyectos.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "proyectos.html";
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", goProyectos);



