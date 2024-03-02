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

document.getElementById("page2-button-id").addEventListener('click', () => {
    window.scrollBy(0, window.innerHeight);   
})

const menuimgid=document.getElementById('menu-img-id');


document.getElementById('m1').addEventListener('mouseenter',()=>{
  menuimgid.src='Mastery.webp'
})


document.getElementById('m2').addEventListener('mouseenter',()=>{
  menuimgid.src='ICONS.webp'
})

document.getElementById('m3').addEventListener('mouseenter',()=>{
  menuimgid.src='Couture.webp'
})

document.getElementById('m4').addEventListener('mouseenter',()=>{
  menuimgid.src='4-1.webp'
})

document.getElementById('m5').addEventListener('mouseenter',()=>{
  menuimgid.src='Experiences_Menu_Image-1.webp'
})


const menuPage = document.getElementById("menu-bar-id")
document.getElementById("nav-menu-id").addEventListener("click", ()=>{
  menuPage.style.transform = "translatex(0%)"
})

document.getElementById("menu-close-btn").addEventListener("click", ()=>{
  menuPage.style.transform = "translatex(100%)"
})