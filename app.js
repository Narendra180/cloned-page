let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
// one that gets displayed on scroll and one that stays in the document flow.(not positioned element)
let desktopMenuBtns = document.querySelectorAll(".desktop-menu-btn");    
let hiddenDesktopNavBar = document.querySelector(".desktop-navbar-onscroll");
// navigation links div
let navBarItem2 = document.querySelector(".navbar-item2");
let navBar = document.querySelector(".navbar");
let closeNavBtns = document.querySelectorAll(".close-nav-btn");

let formErrorMessageLabel = document.querySelector(".error-message");
let requiredFormElements = document.getElementById("form").querySelectorAll("[required]");

let hero = document.querySelector("#hero");

let dropdown = document.querySelector(".budget-dropdown");

let scrollToTopBtn = document.querySelector(".scroll-to-top");

// display navigation links
mobileMenuBtn.addEventListener('click', () => {
    navBarItem2.classList.toggle("display-header-nav");
});

// display navigation links in desktop mode
desktopMenuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(window.innerWidth > 1025) {
            if(navBarItem2.classList.contains("display-header-nav")) {
                navBarItem2.classList.toggle("display-header-nav");
            }
            navBarItem2.classList.toggle("display-header-nav-asmodal");
            hiddenDesktopNavBar.classList.add("navBarBackgroundColorChange");
            desktopMenuBtns.forEach(btn => {
                btn.classList.add("hide-desktop-menu-btn");
            });
            closeNavBtns.forEach(btn => {
                btn.classList.add("show-close-nav-btn");
            });
        } 
    });
});

closeNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBarItem2.classList.toggle("display-header-nav-asmodal");
        hiddenDesktopNavBar.classList.remove("navBarBackgroundColorChange");
        desktopMenuBtns.forEach(btn => {
            btn.classList.remove("hide-desktop-menu-btn");
        });
        closeNavBtns.forEach(btn => {
            btn.classList.remove("show-close-nav-btn");
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
            // navBar.style.top = "0";
            navBar.classList.remove("hide-navbar");
        } else {
            // navBar.style.top = "-55px";
            navBar.classList.add("hide-navbar");
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

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
})

// console.log(requiredFormElements)

requiredFormElements.forEach(ele => {
    ele.addEventListener('blur', (e) => {
        console.log(e.target.nextElementSibling);
        if(e.target.value) {
            e.target.classList.remove("form-input-error-border-color");
            e.target.nextElementSibling.classList.remove("show-error-message");
            // console.log(e.target.nextElementSibling);
        } else {
            e.target.classList.add("form-input-error-border-color");
            e.target.nextElementSibling.classList.add("show-error-message");
            // console.log(e.target.nextElementSibling);
        }
    });    
});


dropdown.addEventListener('change', (e) => {
    console.log(e.target.classList.add("value-got-selected"))
})



scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
});




// background video code

let player;

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let section = {
    start: 0,
    end: 11
};


// function onWindowResize() {
//     // console.log(window.innerWidth)
//     onYouTubeIframeAPIReady();
// }   

// window.addEventListener('resize', onWindowResize);


//    This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    if(window.innerWidth > 767)
        player = new YT.Player(
            'player',
            {
            height: '100%',
            width: '100%',
            videoId: 'hWcLEr75coc',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                'controls': 0,
                'mute': 1
            }
            }
        );
}

function onPlayerReady(event) {
    player.seekTo(section.start);
    player.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        let duration = section.end - section.start;
        setTimeout(restartVideoSection, duration * 1000);
    }
}

function restartVideoSection() {
    player.seekTo(section.start);
}