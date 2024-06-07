window.addEventListener('load', () => {
    gsap.from("header", {duration: 1, y: -100, opacity: 0});
    gsap.from("#home .intro", {duration: 1, delay: 1, y: 100, opacity: 0});
    gsap.from("section", {duration: 1, delay: 2, opacity: 0, stagger: 0.5});
});
