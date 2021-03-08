import { gsap } from "gsap";

gsap.registerEffect({
    name: "moveUp",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            y: config.y,
            opacity: 0,
            ease: 'power1',
            delay: config.delay
        });
    },
    defaults: {duration: 2, delay: 0, y: 0},
    extendTimeline: true
})

export const modalAction = () => {
    const cards = document.querySelectorAll(".card"),
        arrows = document.querySelectorAll(".up-wrapper");

    arrows.forEach((arrow, i) => {
        let reversed = false;
        let tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: 1,
                ease: "power1"
            }
        })

        tl
            .to(cards[i], {
                top: "50%",
                duration: 1.5
            }, 0)
            .to(cards[i].querySelector(".firstBar"), {
                rotate: 45,
                y: 6,
                width: 25
            }, 0)
            .to(cards[i].querySelector(".thirdBar"), {
                rotate: -45,
                y: 6,
                width: 25
            }, 0)
            .to(cards[i].querySelector(".secondBar"), {
                scaleX: 0,
                transformOrigin: "50% 100%"
            }, 0)

        arrow.addEventListener("click", () => {
            reversed ? tl.reverse() : tl.play();
            reversed = !reversed;
        })
    })
}