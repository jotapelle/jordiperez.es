import React from 'react';

function About () {
    return (
        <section class="mt-12rem" id="about">
            <div class="row justify-content-center">
                <h2 class="text-center c-31fdd2">Hi, I'm Jordi!</h2>
                <div class="text-center mt-4 col-6 mx-auto">
                    <p class="fs-18">I'm a .Net developer with an emphasis on C#, MVC & .Net Framework for web applications and learning React too. If you want, you can find some of my projects on Github or also you can reach me by email!</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="row text-center mt-4 col-6 mx-auto">
                    <div class="col">
                        <a class="nav-link c-31fdd2" href="https://github.com/jotapelle?tab=repositories"
                            target="_blank" title="Github">
                            <i class="bi bi-github fs-25"></i>
                        </a>
                    </div>
                    <div class="col">
                        <a class="nav-link c-31fdd2" href="https://www.freecodecamp.org/jotapelle" target="_blank"
                            title="Freecodecamp">
                            <i class="bi bi-code-square fs-25"></i>
                        </a>
                    </div>
                    <div class="col"><a class="nav-link c-31fdd2" href="https://codepen.io/jotapelle/" target="_blank"
                            title="Codepen">
                            <i class="bi bi-box-seam fs-25"></i>
                        </a></div>
                    <div class="col">
                        <a class="nav-link c-31fdd2" href="https://www.linkedin.com/in/jordi-p-50240a112/"
                            target="_blank" title="Linkedin">
                            <i class="bi bi-linkedin fs-25"></i>
                        </a>
                    </div>
                    <div class="col">
                        <a class="nav-link c-31fdd2" href="mailto:info@jordiperez.es" target="_blank" title="Email">
                            <i class="bi bi-envelope fs-25"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;