//components/scroll
window.addEventListener('load', function () {

    if (isMobile.apple.tablet) {
        document.querySelector('.scroll').classList.add("apple");
    }

    if (!media.tablet.matches) {
        let s = document.querySelectorAll('.scroll__section'),
            windowWidth = window.innerWidth;

        let sections = gsap.utils.toArray(".scroll__section");

        let offset = s[s.length - 1].offsetLeft,
            w = s[s.length - 1].offsetWidth,
            offsetX = w - (windowWidth - offset);

        let indent = 600;
        if (media.note.matches) {
            indent = 200;
        }

        if (!isMobile.apple.tablet) {
            gsap.to('.scroll__wrap', {
                // x: -sections.reduce((sum,val)=>sum = sum + val.offsetWidth),
                x: -(offsetX + indent),
                ease: "none",
                scrollTrigger: {
                    trigger: ".scroll",
                    pin: ".scroll",
                    scrub: 1,
                    start: "top top",
                    // markers: true,
                    // base vertical scrolling on how wide the container is so it feels more natural.
                    end: () => "+=" + document.querySelector(".scroll__wrap").offsetWidth
                }
            });
        }
    }


});