let carousel = document.querySelector('.carousel');
let stage = document.querySelector('.carousel-stage');
let prev = document.querySelector('.carousel-prev');
let next = document.querySelector('.carousel-next');
let slide = document.querySelectorAll('.single-slide');
var currentIndex = 0
let slideWidth = slide[0].clientWidth;
var slidesNumber = slide.length - 1;


function goToSlide(index) {
    console.log("index " + index);
    if (index < 0) {
        index = slidesNumber;
    } else if (index > slidesNumber) {
        index = 0;
    }

    console.log(index * (-slideWidth))
    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
    console.log ("current index " + currentIndex)
}

function slideToNext() {
    goToSlide(currentIndex + 1);
}

function slideToPrev() {
    goToSlide(currentIndex - 1);
}

function bindEvents() {
    prev.addEventListener('click', slideToPrev);
    next.addEventListener('click', slideToNext);
}
bindEvents()

function autorotate() {
    setInterval(slideToNext, 4000);
}

autorotate()