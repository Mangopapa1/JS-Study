const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 1;
const size = slide[0].clientWidth;
slides.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Buttons
nextBtn.addEventListener('click', ()=> {
  if(counter >= slide.length -1) return;
  slides.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
  if(counter <= 0) return;
  slides.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Jump to First/Last Slide
slides.addEventListener('transitionend', () => {
    console.log(slide[counter]);
    if (slide[counter].id === 'last'){
      slides.style.transition = 'none'; // 트랜지션 효과 없애기
      counter = slide.length -2; // couter 초기화
      slides.style.transform = 'translateX(' + (-size * counter) + 'px)'; // 실제 마지막 이미지로 이동.
    } else if (slide[counter].id === 'first') {
      slides.style.transition = 'none';
      counter = slide.length - counter; // couter 초기화
      slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });