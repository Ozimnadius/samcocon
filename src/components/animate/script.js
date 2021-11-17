//components/animate
window.addEventListener("load", function () {

    if (!media.tablet.matches) {
        const items = gsap.utils.toArray('.jsAnimate');

        items.forEach(i => {
            let data = i.dataset,
                from = JSON.parse(data.from),
                to = JSON.parse(data.to),
                trigger = data.trigger ?? i;

            gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    scrub: 1,
                    ease: "none",
                    start: data.start,
                    end: data.end,
                    markers: data.markers
                }
            }).fromTo(i, from, to);

        });
    }

});