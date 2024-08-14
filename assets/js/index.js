document.getElementById("menu-toggler").addEventListener("click", function () {
  toggleBodyClass("menu-active");
});

function toggleBodyClass(className) {
  document.body.classList.toggle(className);
}

const carouselInner = document.querySelector(".carousel-inner");
const images = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
let intervalTime = 15000000000; // Interval time in milliseconds
let interval;

function updateCarousel() {
  const offset = -currentIndex * 25;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function moveToNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  restartInterval();
}

function moveToPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  restartInterval();
}

function restartInterval() {
  clearInterval(interval);
  interval = setInterval(moveToNextImage, intervalTime);
}

// Start the interval initially
interval = setInterval(moveToNextImage, intervalTime);

nextButton.addEventListener("click", moveToNextImage);
prevButton.addEventListener("click", moveToPrevImage);

document.addEventListener('DOMContentLoaded', () => {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
