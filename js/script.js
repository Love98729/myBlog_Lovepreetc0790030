const caNav1 = document.getElementById("caNav1");
const caNav2 = document.getElementById("caNav2");
const caNav3 = document.getElementById("caNav3");

caNav1.addEventListener("click", () => {
  document.getElementById("img1").style.opacity = 1;
  document.getElementById("img2").style.opacity = 0;
  document.getElementById("img3").style.opacity = 0;
});
caNav2.addEventListener("click", () => {
  document.getElementById("img1").style.opacity = 0;
  document.getElementById("img2").style.opacity = 1;
  document.getElementById("img3").style.opacity = 0;
});
caNav3.addEventListener("click", () => {
  document.getElementById("img1").style.opacity = 0;
  document.getElementById("img2").style.opacity = 0;
  document.getElementById("img3").style.opacity = 1;
});
