let mobileMenuBtn = document.querySelector(".mobile-menu-btn");    
let headerNav = document.querySelector(".header-nav");

mobileMenuBtn.addEventListener('click', () => {
    headerNav.classList.toggle("header-nav-active");
});