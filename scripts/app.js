var slideIndex = 1;
showSlides(slideIndex);

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  plusItems(-1);
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  plusItems(1);
});

function plusItems(n) {
  let index = (slideIndex += n);
  showSlides(index);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}
