document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.header__burger')) {
        document.documentElement.classList.toggle("burger-open")
    }
}

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        document.documentElement.classList.remove("burger-open");
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// ========================Popup================================
let popup = document.querySelector(".popup-wrapper");
let popupForm = document.querySelector(".popup-form");
let popupBtn = document.querySelector(".popup-open");
let popupClose = document.querySelector(".close-btn");

popupBtn.addEventListener("click", (e) => {
    e.preventDefault;
    showPopup();
});

popupClose.addEventListener("click", (e) => {
    e.preventDefault;
    removePopup();
});

popupForm.addEventListener("submit", () => {
    removePopup();
});

popup.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("popup-wrapper")) {
        removePopup();
    } else return;
});

function showPopup() {
    popup.classList.add("active");
    popup.style.display = "block";
    bodyScroll();
}

function removePopup() {
    popup.classList.remove("active");
    popup.style.display = "none";
    bodyScroll();
}

function bodyScroll() {
    document.body.classList.toggle("no-scroll");
}
// ========================Popup================================

const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
});

// ========================ScrollToTop================================
const scrollBtn = document.querySelector('.isShowBtn')
window.onscroll = () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.remove('isShowBtn_hide');
    } else {
        scrollBtn.classList.add('isShowBtn_hide');
        scrollBtn.classList.remove('isShowBtn_rotate');
    }
}

scrollBtn.onclick = () => {
    scrollBtn.classList.add('isShowBtn_rotate');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
// ========================ScrollToTop================================
