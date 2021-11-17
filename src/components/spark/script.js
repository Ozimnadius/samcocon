//components/spark
window.addEventListener("load", function () {

    if (!media.tablet.matches) {
        gsap.to(".spark__bg img", {
            x: "-50%",
            ease: "none",
            duration: 10,
            repeat: -1
        });

        gsap.to(".spark-statue__svg svg", 5, {
            rotation: 360,
            repeat: -1,
            transformOrigin: "50% 50%",
            ease: Linear.easeNone
        });

        setTimeout(animations, 1000);

        const delay = 1;

        gsap.fromTo(".spark-planet__star", {
                x: 60, //normal value
                y: 40,
                opacity: 1
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.7
            }, delay);

        gsap.fromTo(".spark__stars",
            {
                x: -40,
                y: -60,
                opacity: 1
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.7
            }, delay);
    }

});

function animations() {


    gsap.fromTo(".spark__sub", {
            x: -200, //normal value
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 2
        });

    gsap.fromTo(".spark__txt", {
            y: 500, //normal value
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 2.1
        });

    const t1 = gsap.timeline();

    t1.fromTo(".spark__title-text", {
            y: 200, //normal value
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 2
        })
        .fromTo(".spark__btn", {
                y: 200, //normal value
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.3
            }, "-=1.7")
        .to(".spark__title-line", {
            x: 0,
            duration: 1.5
        }, "-=1.5")
        .fromTo(".spark-statue__img", {
            y: 100
        }, {
            y: 0,
            duration: 2
        }, "-=1.5")


    const $container = $('.spark');
    const fixer = -0.01;

    let request = null;
    let mouse = {x: 0, y: 0};
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    $container.on("mousemove", function (event) {
        let pageX = event.pageX - ($container.width() * 0.5);
        let pageY = event.pageY - ($container.height() * 0.5);

        gsap.to(".spark-planet__star", 0.5, {
            x: (pageX * 2 * fixer),
            y: (pageY * 4 * fixer),
            ease: Power1.easeOut
        });

        gsap.to(".spark-planet__img", 0.5, {
            x: (pageX * 4 * fixer),
            y: (pageY * 4 * fixer),
            ease: Power1.easeOut
        });

        gsap.to(".spark-statue", 1, {
            x: (pageX * 0.5 * fixer),
            y: (pageY * 0.5 * fixer),
            ease: Power1.easeOut
        });

        gsap.to(".spark__stars", 0.5, {
            x: (pageX * -1 * fixer),
            y: (pageY * -2 * fixer),
            ease: Power1.easeOut
        });

        gsap.to(".spark__planet-small", 0.5, {
            x: (pageX * -2 * fixer),
            y: (pageY * -4 * fixer),
            ease: Power1.easeOut
        });

        mouse.x = event.pageX;
        mouse.y = event.pageY;
        cancelAnimationFrame(request);
        request = requestAnimationFrame(animateBg);
    });

    function animateBg() {
        let dx = mouse.x - cx;
        let dy = mouse.y - cy;

        let tiltx = (dy / cy);
        let tilty = -(dx / cx);
        let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
        let degree = (radius * 20);
        gsap.to(".spark__bg", 0.5, {
            transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
            ease: Power2.easeOut
        });
    }

}