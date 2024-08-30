/*******script for button imgae ửok_slider****** */

const carousel = document.querySelector(".work_list_inner");
const arrowIcons = document.querySelectorAll(".button_setup");

//Get the width of the first image plus any margin
let firstImgWidth = carousel.querySelector("img").clientWidth + 14;

// Add event listeners to the buttons to scroll the carousel
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
    });
});


*/const carousel = document.querySelector(".work_list_inner");
const arrowIcons = document.querySelectorAll(".button_setup");
let translateX = 0;
const step = carousel.querySelector(".work_card").offsetWidth + 0.75; // Calculate the width of one item

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const direction = icon.id === "left" ? 1 : -1; // Left button moves right (positive), right button moves left (negative)
        translateX += direction * step;
        carousel.style.transform = `translate3d(${translateX}px, 0, 0)`;
    });
});

/*
const carousel = document.querySelector(".work_list_inner");
const arrowIcons = document.querySelectorAll(".button_setup");

// Calculate the width of one item plus the padding
const step = carousel.querySelector(".work_card").offsetWidth + (2.5 * window.innerWidth / 100); 
let translateX = 0;
const moveAmount = 7.5 * window.innerWidth / 100; // 7.5vw converted to pixels

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const direction = icon.id === "left" ? 1 : -1; // Left button moves right (positive), right button moves left (negative)
        translateX += direction * moveAmount;
        carousel.style.transform = `translate3d(${translateX}px, 0, 0)`;
    });
});

const carousel = document.querySelector(".work_list_inner");
const arrowIcons = document.querySelectorAll(".button_setup");
const workCard = carousel.querySelector(".work_card");

if (workCard) {
    const cardWidth = workCard.offsetWidth; // Get the card's width
    const padding = 2.5 * window.innerWidth / 100; // Calculate padding in pixels
    const step = cardWidth + padding; // Calculate step size

    let translateX = 0;
    const moveAmount = 7.5 * window.innerWidth / 100; // 7.5vw converted to pixels

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const direction = icon.id === "left" ? 1 : -1;
            translateX += direction * moveAmount;
            carousel.style.transform = `translate3d(${translateX}px, 0, 0)`;
        });
    });
} else {
    console.error("No .work_card elements found.");
}*/