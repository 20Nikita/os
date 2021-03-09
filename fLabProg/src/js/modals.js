import { gsap } from "gsap";

export const modalAction = () => {
    const cards = document.querySelectorAll(".card"),
        arrows = document.querySelectorAll(".up-wrapper"),
        curtainItems = document.querySelectorAll(".curtain-item");

    let reversed = false;

    arrows.forEach((arrow, i) => {

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
        cards[i].querySelectorAll(".btn").forEach((btn, i) => {

            // btn.addEventListener("click", () => {
            //     reversed ? tl.reverse() : tl.play();
            //     reversed = !reversed;
            // })
        })
    })
}