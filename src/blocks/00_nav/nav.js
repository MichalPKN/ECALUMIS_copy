const navIcon = document.querySelector("nav .menu-icon");
const navIconBottom = document.querySelector("nav .menu-icon .bottom-icon");
const navIconOpen = document.querySelector("nav .menu-icon .open-icon");
const menuItems = document.querySelector("nav .menu-items");

const homeNav = document.querySelector("nav .homeNav")
const servicesNav = document.querySelector("nav .servicesNav")
const teamNav = document.querySelector("nav .teamNav")

navIcon.addEventListener("click", () => {
    menuItems.classList.toggle("active");
    navIconBottom.classList.toggle("hidden");
    navIconOpen.classList.toggle("hidden");
})

homeNav.addEventListener("click", () => {
    smoother.scrollTo(".heroImage", true);
    menuItems.classList.toggle("active");
    navIconBottom.classList.toggle("hidden");
    navIconOpen.classList.toggle("hidden");
});
servicesNav.addEventListener("click", () => {
    smoother.scrollTo(".section3", true);
    menuItems.classList.toggle("active");
    navIconBottom.classList.toggle("hidden");
    navIconOpen.classList.toggle("hidden");
});
teamNav.addEventListener("click", () => {
    smoother.scrollTo(".team", true);
    menuItems.classList.toggle("active");
    navIconBottom.classList.toggle("hidden");
    navIconOpen.classList.toggle("hidden");
});