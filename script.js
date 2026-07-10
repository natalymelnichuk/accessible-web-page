const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-navigation");
const navBar = document.querySelector(".main-nav");



menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    mainNav.classList.toggle("active");
    navBar.classList.toggle("active");
});