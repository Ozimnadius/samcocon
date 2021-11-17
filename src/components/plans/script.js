//components/plans
window.addEventListener('load', function () {

    if (!media.tablet.matches) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".plans",
                scrub: 1,
                ease: "none",
                start: "100px bottom",
                end: "top 60%",
                // markers: true
            }
        });

        const boxes = gsap.utils.toArray('.plans__item');

        boxes.forEach(box => {
            tl.fromTo(box, {
                y: "100%",
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            });
        });
    }

    let links = document.querySelectorAll('.jsPlanOpen');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            let opts = {};
            if (isMobile.apple.device){
                opts ={
                    afterShow: function (instance, current) {
                        setTimeout(function (){
                            current.$content[0].parentElement.scrollTo({
                                top: 0
                            });
                        },100);

                    }
                };
            }
            template.open("info",opts);
            new Tabs(this.hash);
        });
    });

    if (media.tablet.matches) {
        let flips = document.querySelectorAll('.jsPlanFlip');
        flips.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                this.closest('.plan').classList.toggle('flip');
            });
        });
    }

});