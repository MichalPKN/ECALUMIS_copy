const menuItems = document.querySelector("nav .menu-items");
const navIcon = document.querySelector("nav .menu-icon");

const homeNav = document.querySelector("nav .homeNav")
const servicesNav = document.querySelector("nav .servicesNav")
const teamNav = document.querySelector("nav .teamNav")

navIcon.addEventListener("click", () => {
    menuItems.classList.toggle("active");
    navIcon.classList.toggle("active");
})

homeNav.addEventListener("click", () => {
    smoother.scrollTo(".heroImage", true);
    menuItems.classList.toggle("active");
    navIcon.classList.toggle("active");
});
servicesNav.addEventListener("click", () => {
    smoother.scrollTo(".section3", true);
    menuItems.classList.toggle("active");
    navIcon.classList.toggle("active");
});
teamNav.addEventListener("click", () => {
    smoother.scrollTo(".team", true);
    menuItems.classList.toggle("active");
    navIcon.classList.toggle("active");
});