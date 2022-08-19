// create the scrollSmoother before your scrollTriggers
let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    //normalizeScroll: true,
    ignoreMobileResize: true,
    //smooth: 0.5, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    //smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

ScrollTrigger.matchMedia({
    "(min-width: 954px)": function() {
        smoother.effects(".infoItem, .infoItem", {
            speed: 1,
            lag: (i) => i * 0.2
        })
    },
    "(max-width: 953px)": function() {},
});