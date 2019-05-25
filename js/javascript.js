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
