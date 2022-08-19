gsap.from(".reference .container", {
    scrollTrigger: {
        trigger: ".reference .container",
        markers: true
    },
    duration: 2,
    y: 150,
    opacity: 0,
    ease: "power4"
})