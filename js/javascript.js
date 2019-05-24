/* mobile navigation bar*/
const menuButton = document.getElementById('menu-button');
const navbarList = document.getElementById('navbar-list');

menuButton.addEventListener('click', function() {
        navbarList.classList.toggle('is-open');
        menuButton.classList.toggle('is-open');
    },
    false
);
/*mobile navigation bar*/
