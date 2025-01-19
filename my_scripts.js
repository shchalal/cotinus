<script>

    document.addEventListener('DOMContentLoaded', function () {
        const burgerMenu = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu_header');

        burgerMenu.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    });
</script>