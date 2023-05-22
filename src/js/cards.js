const slides = document.querySelectorAll('.container-cards__box');

export function cardHover() {

  for (const slide of slides) {
    slide.addEventListener('mouseover', () => {
      clearActiveClasses();

      slide.classList.add('container-cards__box_active');
    });
  }
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('container-cards__box_active');
  });
}