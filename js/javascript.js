/* mobile navigation bar*/
const menuButton = document.getElementById('menu-button');
s

menuButton.addEventListener(
    'click',
    function () {
        navbarList.classList.toggle('is-open');
        menuButton.classList.toggle('is-open');
    },
    false
);
/*mobile navigation bar*/
