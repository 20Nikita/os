import {gsap} from "gsap";

export const curtainAnim = () => {
    const curtainItems = document.querySelectorAll(".curtain-item");

    const tl = gsap.timeline({
        paused: true,
        defaults: {
            duration: .6,
            ease: "bounce.out"
        }
    })

    curtainItems.forEach((curtain, i) => {
        curtain.addEventListener("click", () => {
            tl
                .to(curtainItems[i], {
                    y: -30,
                    duration: .6,
                    ease: "power1.inOut"
                })
                .to(curtainItems[i], {
                    y: 0
                })

            tl.play();
        })
    })

}