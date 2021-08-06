import React from 'react';

function Header() {
    return (
        <nav class="row justify-content-around navbar navbar-expand-md fixed-top bg-dark">
            <div class="col-4">
                <p class="navbar-brand c-efeff1">Jordi Pérez</p>
            </div>
            <div class="col-4 d-flex flex-row-reverse">
                <a class="nav-link c-31fdd2" href="mailto:info@jordiperez.es" target="_blank" title="Email">
                    <i class="bi bi-envelope"></i>
                </a>
                <a class="nav-link c-31fdd2" href="https://www.linkedin.com/in/jordi-p-50240a112/" target="_blank"
                    title="Linkedin">
                    <i class="bi bi-linkedin"></i>
                </a>
                <a class="nav-link c-31fdd2" href="https://codepen.io/jotapelle/" target="_blank" title="Codepen">
                    <i class="bi bi-box-seam"></i>
                </a>
                <a class="nav-link c-31fdd2" href="https://www.freecodecamp.org/jotapelle" target="_blank"
                    title="Freecodecamp">
                    <i class="bi bi-code-square"></i>
                </a>
                <a class="nav-link c-31fdd2" href="https://github.com/jotapelle?tab=repositories" target="_blank"
                    title="Github">
                    <i class="bi bi-github"></i>
                </a>
            </div>
        </nav>
    )
}

export default Header;