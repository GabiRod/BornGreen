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

/* Progress bar element. */
const progressBar = document.getElementById('progressbar');

/* Progress bar steps. */
const circles = document.querySelectorAll('.progress-circle');

/* Check if progress bar exists. */
if (progressBar) {
    /* Current progress (data-final-value in HTML). */
    const finalValue = progressBar.dataset.finalValue;

    /* Calculate current step based on number of steps and current progress. */
    const currentStep = finalValue / (100 / (circles.length + 1));

    /* Fill all completed steps */
    for (let i = 0; i < (currentStep - 1); i++) {
        circles[i].classList.add('circle-filled');
    }

    /* Animate progress bar to current step. */
    TweenMax.to(progressBar, 2, {
        value: finalValue,
        ease: Power2.easeInOut,

        /* 
        Callback function (will be called when animation is complete).
        https://greensock.com/docs/TweenMax/static.to
        */
        onComplete: fillNextCircle,

        /*
            Parameters which will be passed to the callback function. https://greensock.com/forums/topic/14612-pass-a-function-to-oncomplete-with-parameter-without-invoking-it/
        */
        onCompleteParams: [currentStep]
    });
}

/* Fill current step when TweenMax animation is complete. */
function fillNextCircle(step) {
    const nextCircle = circles[step - 1];
    nextCircle.classList.add('circle-filled');
}


/* slideshow on learn green */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}
