let button = document.querySelector(".heroImage .container a");

button.addEventListener("click", (e) => {
    smoother.scrollTo(".section3", true);
});

gsap.from(".heroImage .container", {
    duration: 1.8,
    y: 150,
    opacity: 0,
    ease: "power4"
})