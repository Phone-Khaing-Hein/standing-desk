const carouselInner = document.querySelector(".carousel-inner");
const images = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
let intervalTime = 15000; // Interval time in milliseconds
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

localStorage.setItem("deskType", "standing");

document.addEventListener("DOMContentLoaded", () => {
  const discountModal = document.getElementById("discount-modal");
  const closeModal = document.querySelector(".close");
  const applyCodeButton = document.querySelector(".apply-code");

  // Check if the current page is the home page
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    discountModal.style.display = "block";
  }

  // Close the modal when the user clicks the "x" button
  closeModal.addEventListener("click", () => {
    discountModal.style.display = "none";
  });

  // Close the modal when the user clicks anywhere outside of it
  window.addEventListener("click", (event) => {
    if (event.target === discountModal) {
      discountModal.style.display = "none";
    }
  });

  // Apply the discount code when the button is clicked
  applyCodeButton.addEventListener("click", () => {
    discountModal.style.display = "none";
    alert("Discount code applied! Use PKH26 at checkout.");
  });
});
