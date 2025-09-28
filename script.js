const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalImages = images.length;

// Show slide function
function showSlide(i) {
  // Each step moves 2 images
  index = (i + totalImages) % totalImages; 
  slides.style.transform = `translateX(${-index * 50}%)`; 
}

// Button events
nextBtn.addEventListener('click', () => showSlide(index + 2));
prevBtn.addEventListener('click', () => showSlide(index - 2));
