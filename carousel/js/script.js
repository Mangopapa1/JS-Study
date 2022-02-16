const slides = document.querySelector('ul');
const slide = document.querySelectorAll('.img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 1;
const size = slide[0].clientWidth;
nextBtn.addEventListener('click', function(){
    slide.style.transform = 'translateX(-450px)';
})

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';