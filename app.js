let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
// one that gets displayed on scroll and one that stays in the document flow.(not positioned element)
let desktopMenuBtns = document.querySelectorAll(".desktop-menu-btn");    
let hiddenDesktopNavBar = document.querySelector(".desktop-navbar-onscroll");
// navigation links div
let navBarItem2 = document.querySelector(".navbar-item2");
let navBar = document.querySelector(".navbar");
let closeNavBtns = document.querySelectorAll(".close-nav-btn");

// display navigation links
mobileMenuBtn.addEventListener('click', () => {
    if(window.innerWidth > 1025) {
        navBarItem2.classList.toggle("display-header-nav-flex");
    } else {
        navBarItem2.classList.toggle("display-header-nav");
    }
});

// display navigation links in desktop mode
desktopMenuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(window.innerWidth > 1025) {
            navBarItem2.classList.toggle("display-header-nav-flex");
            hiddenDesktopNavBar.classList.add("navBarBackgroundColorChange");
            desktopMenuBtns.forEach(btn => {
                btn.style.display = "none";
            });
            closeNavBtns.forEach(btn => {
                btn.style.display = "block";
            });
        } else {
            navBarItem2.classList.toggle("display-header-nav");
        }
    });
});

closeNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBarItem2.classList.toggle("display-header-nav-flex");
        hiddenDesktopNavBar.classList.remove("navBarBackgroundColorChange");
        desktopMenuBtns.forEach(btn => {
            btn.style.display = "block";
        });
        closeNavBtns.forEach(btn => {
            btn.style.display = "none";
        });
    });
});



// hide navigation bar when scrolled up and show scrolled down 
// when viewport width is less than 1025px.
let prevScrollPosition = window.pageYOffset;
window.addEventListener("scroll", () => {
    if(window.innerWidth < 1025) {
        let currentScrollPosition = window.pageYOffset;
        if (prevScrollPosition > currentScrollPosition) {
            navBar.style.top = "0";
        } else {
            navBar.style.top = "-55px";
        }
        prevScrollPosition = currentScrollPosition;
    } else {
        let currentScrollPosition = window.pageYOffset;
        if(currentScrollPosition > 90) {
            hiddenDesktopNavBar.classList.add("show-desktop-navbar-onscroll");
        } else {
            hiddenDesktopNavBar.classList.remove("show-desktop-navbar-onscroll");
        }
    }
})

// show hidden desktop navbar onscroll 

