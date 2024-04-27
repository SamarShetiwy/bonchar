<template>
  <div class="relative">
  <div class="slider-container overflow-hidden">
    <div class="slider flex">
     
      <div class="slide flex-shrink-0 w-full">Slide 1</div>
      <div class="slide flex-shrink-0 w-full">Slide 2</div>
      <div class="slide flex-shrink-0 w-full">Slide 3</div>
    </div>
  </div>
  <button class="left-arrow absolute top-1/2 transform -translate-y-1/2 left-4  px-3 py-2 rounded-full">&#10094;</button>
  <button class="right-arrow absolute top-1/2 transform -translate-y-1/2 right-4 px-3 py-2 rounded-full">&#10095;</button>
</div>
 
</template>

<script>
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let index = 0;

function slideLeft() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

function slideRight() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(${-slideWidth * index}px)`;
}

document.querySelector('.left-arrow').addEventListener('click', slideLeft);
document.querySelector('.right-arrow').addEventListener('click', slideRight);

</script>

<style>

</style>