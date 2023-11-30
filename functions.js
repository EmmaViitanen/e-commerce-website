document.getElementById("card").addEventListener("click", cardFunction);

function cardFunction() {
  var x = document.getElementById("card-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function menuFunction() {
  var x = document.getElementById("hamburger-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document
  .getElementsByClassName("main-slide")
  .addEventListener("click", showSlides);

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("main-slide");
  let dots = document.getElementsByClassName("slide-img");
  if (n > slide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.legnth; ++i) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
