const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.onclick = function () {
  currentSlide();
};

prevBtn.addEventListener("click", (e) => {
  currentSlide(0);
});

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
}
