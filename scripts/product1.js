const mainImage = document.getElementById("main-img");
const mainImageDefault = document.getElementById("main-img-default");
const smallImgages = document.querySelectorAll("#small-img");

function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}

Array.from(smallImgages).forEach((item) => {
  item.addEventListener("click", (e) => {
    mainImageDefault.src = e.target.src;
    mainImage.style.backgroundImage = "url(" + e.target.src + ")";

    smallImgages.forEach((img) => {
      img.style.opacity = 1;
    });

    e.target.style.opacity = 0.6;
  });
});
