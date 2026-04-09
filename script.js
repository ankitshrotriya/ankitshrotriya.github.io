/* ===== TOP IMAGE SLIDER ===== */
let slides = document.querySelectorAll(".slides img");

let slideIndex = 0;

setInterval(() => {

    slides[slideIndex].style.display = "none";

    slideIndex++;

    if (slideIndex == slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";

}, 3000);


/* ===== ACTIVITY SLIDER ===== */
const track = document.querySelector('.activity-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let activityIndex = 0;

const cardWidth = 340;
const totalCards = track.children.length;

/* 👉 कितने cards visible हैं auto calculate */
function getVisibleCards() {
    return Math.floor(document.querySelector('.activity-slider').offsetWidth / cardWidth);
}

function updateSlider() {
    track.style.transform = `translateX(-${activityIndex * cardWidth}px)`;
}

/* NEXT */
nextBtn.addEventListener('click', () => {

    let visibleCards = getVisibleCards();

    if (activityIndex < totalCards - visibleCards) {
        activityIndex++;
    } else {
        activityIndex = 0; // 🔁 reset
    }

    updateSlider();
});

/* PREVIOUS */
prevBtn.addEventListener('click', () => {

    let visibleCards = getVisibleCards();

    if (activityIndex > 0) {
        activityIndex--;
    } else {
        activityIndex = totalCards - visibleCards;
    }

    updateSlider();
});

/* AUTO SLIDE */
setInterval(() => {
    nextBtn.click();
}, 3000);


/* ===== AUTO VIDEO SLIDER ===== */
/* ===== PERFECT AUTO VIDEO SLIDER ===== */

const videoTrack = document.querySelector('.video-track');
const videoItems = document.querySelectorAll('.video-item');

let videoIndex = 0;

/* कितने videos visible हैं */
function getVisibleVideos() {

    const sliderWidth =
        document.querySelector('.video-slider').offsetWidth;

    const videoWidth =
        videoItems[0].offsetWidth + 20;

    return Math.floor(sliderWidth / videoWidth);
}

function autoSlideVideos() {

    const visibleVideos = getVisibleVideos();

    const videoWidth =
        videoItems[0].offsetWidth + 20;

    /* last visible तक ही slide */

    if (videoIndex < videoItems.length - visibleVideos) {

        videoIndex++;

    } else {

        videoIndex = 0;

    }

    videoTrack.style.transform =
        `translateX(-${videoIndex * videoWidth}px)`;

}

/* हर 3 सेकंड में slide */

setInterval(autoSlideVideos, 3000);