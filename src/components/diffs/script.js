//components/diffs
window.addEventListener('load', function () {

    if (!media.tablet.matches) {
        let tlCols = gsap.timeline({
            scrollTrigger: {
                trigger: ".diffs__cols",
                scrub: 1,
                ease: "none",
                start: "top 90%",
                end: "top 80%",
                // markers: true
            }
        });

        const boxes = gsap.utils.toArray('.diffs__col');

        boxes.forEach(box => {
            tlCols.fromTo(box, {
                y: "50px",
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            });
        });
    }


});