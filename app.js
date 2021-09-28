let mobileMenuBtn = document.querySelector(".mobile-menu-btn");    
let headerNav = document.querySelector(".navbar-item2");
let navBar = document.querySelector(".navbar");

mobileMenuBtn.addEventListener('click', () => {
    headerNav.classList.toggle("display-header-nav");
});

let prevScrollPosition = window.pageYOffset;
window.addEventListener("scroll", () => {
    let currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition > currentScrollPosition) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-55px";
    }
    prevScrollPosition = currentScrollPosition;
})