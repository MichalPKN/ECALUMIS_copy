gsap.fromTo(".reference .container", {
    y: 200,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 1,

    scrollTrigger: {
        trigger: ".reference .container",
        start: "top 80%",
        end: "bottom bottom",
        ease: "power3.inOut",
        once: true,
        // toggleActions: "restart none none none",
        // scrub: true,
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})