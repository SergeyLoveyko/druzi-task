// const carousel = document.querySelector('.carousel');

// let isDragging = false;

// export function slide() {
//   if (!isDragging) return;
  
//   carousel.addEventListener("mousedown", dragStart);
//   carousel.addEventListener("mousemove", dragging);
// }

// const dragStart = () => {
//   isDragging = true;
// }


// const dragging = (e) => {
//   carousel.scrollLeft = e.pageX;
// }

export function slide() {

  const carousel = document.querySelector('.carousel');
  const arrowBtns = document.querySelectorAll('.services__arrow');
  const firstCardWidth = carousel.querySelector('.card-carousel').offsetWidth;
  const carouselChildrens = [...carousel.children]

  let isDragging = false, startX, startScrollLeft;

  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterBegin", card.outerHTML);
  });

  carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeEnd", card.outerHTML);
  });

  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
  
  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  }
  
  const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  }

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  }

  const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition");
    } 
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
  }
  
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);

}

