let openMenuIcon = document.querySelector(".fa-bars");
let closeMenuIcon = document.querySelector(".fa-x");
let mobileNav = document.querySelector(".mobile-nav");
let header = document.querySelector("header");

// when i click on  the menu icon
// open the mobile nav
// change openMenuIcon

openMenuIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("slide");
    openMenuIcon.classList.toggle("fa-x");
    closeMenuIcon.classList.toggle("hide");
});

