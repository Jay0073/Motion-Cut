let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update body background image
  const currentBackground = slides[currentSlide].style.backgroundImage;
  // document.body.style.backgroundImage = currentBackground;
  document.getElementById("background-container").style.backgroundImage =
    currentBackground;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialize the slider
showSlide(currentSlide);


const element = document.querySelector(".container");

let startX;
let endX;

element.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

element.addEventListener("touchend", (event) => {
  endX = event.changedTouches[0].clientX;

  const distance = endX - startX;
  const threshold = 50; // Adjust the threshold as needed

  if (Math.abs(distance) > threshold) {
    if (distance > 0) {
      // Swipe right
      prevSlide();
    } else {
      // Swipe left
      nextSlide();
    }
  }
});
