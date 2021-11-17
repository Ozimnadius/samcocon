//blocks/nav.js
window.addEventListener("load", function (){
    const sections = gsap.utils.toArray('.jsSection');

    sections.forEach((section, x) => {
        ScrollTrigger.create({
            start: "top center",
            end: "bottom center",
            // markers: true,
            trigger: section,
            onLeave: () => {
                document.querySelector('.nav__item[href="#' + section.id + '"]').classList.remove('active');
            },
            onLeaveBack: () => {
                document.querySelector('.nav__item[href="#' + section.id + '"]').classList.remove('active');
            },
            onEnter: () => {
                document.querySelector('.nav__item[href="#' + section.id + '"]').classList.add('active');
            },
            onEnterBack: () => {
                document.querySelector('.nav__item[href="#' + section.id + '"]').classList.add('active');
            },
        });

    });

    let offsetY = 0,
        duration = 0.02;

    if (media.tablet.matches){
        duration = 0.3;
    }

    if (media.mobile.matches){
        offsetY = 110;
    }

    gsap.utils.toArray(".nav__item").forEach(function (a) {
        a.addEventListener("click", function (e) {
            e.preventDefault();
            gsap.to(window, {duration: duration, scrollTo: {y: this.hash, offsetY: offsetY}});
            $('.aside').removeClass("open");
        });
    });
});

