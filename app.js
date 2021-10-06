const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

window.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
    changeSlides('up');
  } else if (event.code === 'ArrowDown') {
    changeSlides('down');
  }
});

upBtn.addEventListener('click', () => {
  changeSlides('up');
});

downBtn.addEventListener('click', () => {
  changeSlides('down');
});

function changeSlides(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  let height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
