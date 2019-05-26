/* mobile navigation bar*/
const menuButton = document.getElementById('menu-button');
const navbarList = document.getElementById('navbar-list');

if (menuButton && navbarList) {
    menuButton.addEventListener('click', function () {
            navbarList.classList.toggle('is-open');
            menuButton.classList.toggle('is-open');
        },
        false
    );
}

/* choose a tree */
const trees = document.querySelectorAll('#chooseYourTree .tree');

if (trees.length) {
    trees.forEach(function (tree) {
        tree.addEventListener('click', function (event) {
            trees.forEach(function (element) {
                element.classList.remove('tree-selected');
            });

            tree.classList.add('tree-selected');
        }, false);
    });
}

/* add hover on buttons */
const buttons = document.querySelectorAll(".button-hover");

if (buttons.length) {
    buttons.forEach(function (button) {
        button.addEventListener('mouseover', function () {
            button.style.background = "#BF592E";
        });
    });

    buttons.forEach(function (button) {
        button.addEventListener('mouseout', function () {
            button.style.background = "#D26132";
        });
    });
}
