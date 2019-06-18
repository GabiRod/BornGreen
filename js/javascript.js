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

if (document.getElementsByClassName("mySlides").length) {
    showSlides();
}

/* animation of roots
We used an example from scrollmagic documentation -> https://scrollmagic.io/examples/advanced/svg_drawing.html and modified it to fit our needs.
*/
function pathPrepare(path) {
    const lineLength = path.getTotalLength();

    path.style.strokeDasharray = lineLength;
    path.style.strokeDashoffset = lineLength;
}

if (document.body.classList.contains('has-root-animation')) {

    const rootOne = document.getElementById('rootOne');
    const rootOneMedium = document.getElementById('rootOneMedium');
    const rootTwo = document.getElementById('rootTwo');
    const rootTwoMedium = document.getElementById('rootTwoMedium');
    const rootThree = document.getElementById('rootThree');
    const rootThreeMedium = document.getElementById('rootThreeMedium');
    const rootFour = document.getElementById('rootFour');
    const rootFourMedium = document.getElementById('rootFourMedium');
    const rootFourSmall = document.getElementById('rootFourSmall');

    // prepare SVG
    pathPrepare(rootOne);
    pathPrepare(rootOneMedium);
    pathPrepare(rootTwo);
    pathPrepare(rootTwoMedium);
    pathPrepare(rootThree);
    pathPrepare(rootThreeMedium);
    pathPrepare(rootFour);
    pathPrepare(rootFourMedium);
    pathPrepare(rootFourSmall);

    // init controller
    const controller = new ScrollMagic.Controller();

    // build tween1
    const tween = TweenMax.to(rootOne, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene
    const scene = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing1",
            duration: 600,
            tweenChanges: true
        })
        .setTween(tween)
        .addTo(controller);

    // build tween11
    const tween11 = TweenMax.to(rootOneMedium, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene11
    const scene11 = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing1",
            duration: 600,
            tweenChanges: true
        })
        .setTween(tween11)
        .addTo(controller);

    // build tween2
    const tween2 = TweenMax.to(rootTwo, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene2
    const scene2 = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing2",
            duration: 400,
            tweenChanges: true
        })
        .setTween(tween2)
        .addTo(controller);

    // build tween22
    const tween22 = TweenMax.to(rootTwoMedium, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene22
    const scene22 = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing2",
            duration: 400,
            tweenChanges: true
        })
        .setTween(tween22)
        .addTo(controller);

    // build tween3
    const tween3 = TweenMax.to(rootThree, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene3
    const scene3 = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing3",
            duration: 400,
            tweenChanges: true
        })
        .setTween(tween3)
        .addTo(controller);

    // build tween33
    const tween33 = TweenMax.to(rootThreeMedium, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene33
    const scene33 = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing3",
            duration: 400,
            tweenChanges: true
        })
        .setTween(tween33)
        .addTo(controller);

    // build tween4
    const tween4 = TweenMax.to(rootFour, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene4
    const scene4 = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing4",
            duration: 400,
            tweenChanges: true
        })
        .setTween(tween4)
        .addTo(controller);

    // build tween44
    const tween44 = TweenMax.to(rootFourMedium, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene44
    const scene44 = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing4",
            duration: 400,
            tweenChanges: true
        })
        .setTween(tween44)
        .addTo(controller);

    // build tween444
    const tween444 = TweenMax.to(rootFourSmall, 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }); // draw word for 0.9

    // build scene444
    const scene444 = new ScrollMagic.Scene({
            triggerElement: ".svg-drawing4",
            duration: 400,
            tweenChanges: true
        })
        .setTween(tween444)
        .addTo(controller);
}

const form = document.getElementsByTagName("form");

if (form.length) {
    $(".next").mouseenter(function (e) {

        e.preventDefault();

        localStorage.setItem("flag", "set");

        let data = $("form").serializeArray();

        $.each(data, function (i, obj) {

            /*console.log(i, obj);*/
            localStorage.setItem(obj.name, obj.value);

        });


    });

    if (localStorage.getItem("flag") == "set") {

        let data = $(".form-summary").serializeArray();

        $.each(data, function (i, obj) {

            $("[name='" + obj.name + "']").val(localStorage.getItem(obj.name));


        });
    }
}
