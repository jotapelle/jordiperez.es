import React from 'react';


function Footer() {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <footer class="mt-12rem" id="footer">
            <div class="row justify-content-md-center">
                <p class="text-center c-efeff1">©
                {getYear()} - Jordi Pérez</p>
            </div>
        </footer>
    )
}

export default Footer;