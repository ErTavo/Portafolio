let slideIndex = {};

function changeSlide(n, sliderName) {
  if (!slideIndex[sliderName]) {
    slideIndex[sliderName] = 1;
  }
  let slider = document.querySelector(`.${sliderName}`);
  if (!slider) {
    console.error(`No se encontró un elemento con la clase '${sliderName}'.`);
    return;
  }
  let slidesContainer = slider.querySelector('.slides-container');
  let slides = slider.getElementsByClassName('slide');
  slideIndex[sliderName] += n;

  if (slideIndex[sliderName] > slides.length) {
    slideIndex[sliderName] = 1;
  } else if (slideIndex[sliderName] < 1) {
    slideIndex[sliderName] = slides.length;
  }

  // Actualiza la propiedad 'transform' para lograr una transición suave
  slidesContainer.style.transform = `translateX(-${(slideIndex[sliderName] - 1) * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0, 'projects-slider');
  });
