const sliderImages = document.querySelectorAll('.slide');
const arrowUp = document.querySelectorAll('#arrow-up');
const arrowDown = document.querySelectorAll('#arrow-down');
const dots = document.querySelectorAll('.dot');
const sliderbar = document.querySelector('#slidebar');
const sliderContainer = document.querySelector('#slide-container');
const selector = document.querySelector('#selector');
const slide3 = document.querySelector('.slide3');
let current = 0;

const reset = () => {
  sliderImages.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.style.background = 'transparent');
  sliderContainer.style.display = 'none';
};

const startSlide = () => {
  reset();
  dots[0].style.background = 'white';
  sliderImages[0].style.display = 'block';
};

const nextSlide = () => {
  reset();
  sliderImages[current + 1].style.display = 'block';
  dots[current + 1].style.background = 'white';
  current++;
  if(current === 2){
    sliderContainer.style.display = 'block';
  }
};

const prevSlide = () => {
  reset();
  sliderImages[current - 1].style.display = 'block';
  dots[current - 1].style.background = 'white';
  current--;
};

arrowDown.forEach(arrow => arrow.addEventListener('click', nextSlide));
arrowUp.forEach(arrow => arrow.addEventListener('click', prevSlide));


sliderbar.addEventListener('input', (e) => {
  slide3.scrollLeft = e.target.value * ((slide3.scrollWidth - 900) / 100)
});


startSlide();
