let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
// one that gets displayed on scroll and one that stays in the document flow.(not positioned element)
let desktopMenuBtns = document.querySelectorAll(".desktop-menu-btn");    
let hiddenDesktopNavBar = document.querySelector(".desktop-navbar-onscroll");
// navigation links div
let navBarItem2 = document.querySelector(".navbar-item2");
let navBar = document.querySelector(".navbar");
let closeNavBtns = document.querySelectorAll(".close-nav-btn");

let hero = document.querySelector("#hero");

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
})

{/* <div id="myvideo"></div> */}

let player;
let videoId='hWcLEr75coc';
let startSeconds = 0;  // set your own video start time when loop play
let endSeconds = 9;   // set your own video end time when loop play
let playerConfig = {
  height: '560',
  width: '315',
  videoId: videoId,
  playerVars: {

    autoplay: 1,            // Auto-play the video on load
    controls: 0,            // Show pause/play buttons in player
    showinfo: 0,            // Hide the video title
    modestbranding: 1,      // Hide the Youtube Logo
    fs: 1,                  // Hide the full screen button
    cc_load_policy: 0,      // Hide closed captions
    iv_load_policy: 3,      // Hide the Video Annotations
    start: startSeconds,
    end: endSeconds,
    autohide: 0, // Hide video controls when playing
  },
  events: {
       'onStateChange': onStateChange,       // reference to Iframe API
        onReady: function(e) {              // mute the video when loaded
        e.target.mute();             
      }
    }
};
//excute the video in div
function onYouTubePlayerAPIReady() {

  player = new YT.Player('background-video', playerConfig);

}
//repload the video when onStateChange=YT.PlayerState.ENDED)
function onStateChange(state) {
  if (state.data === YT.PlayerState.ENDED) {
    player.loadVideoById({
      videoId: videoId,
      startSeconds: startSeconds,
      endSeconds: endSeconds

    });
  }
}


