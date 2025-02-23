document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-header');

    burgerMenu.addEventListener('click', function () {
        menu.classList.toggle('active');
        burgerMenu.classList.toggle('active')

        });
    });
