const parallax = document.getElementById("sec1");
const parallax1 = document.getElementById("sec2");
const parallax2 = document.getElementById("sec3");
const parallax3 = document.getElementById("sec4");


window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  parallax1.style.backgroundPositionY = offset * 0.7 + "px";
  parallax2.style.backgroundPositionY = offset * 0.7 + "px";
  parallax3.style.backgroundPositionY = offset * 0.7 + "px";

});
