const ham = document.querySelector(".ham");
const closeBtn = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");

ham.addEventListener("click", () => {
  navItems.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navItems.classList.remove("active");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navItems.classList.remove("active");
  }
});


const openBtn = document.querySelector(".book-now");
const container = document.querySelector(".container");
const card1 = document.querySelector(".card");
const login = document.querySelector(".login");
const card2 = document.querySelector(".second-card");
openBtn.addEventListener("click", () => {
  container.classList.add("hidden");
  card1.classList.add("show");
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    container.classList.remove("hidden");
    card2.classList.remove("show");
  }
});
container.addEventListener("click", (event) => {
  if (event.target === container) {
    container.classList.remove("hidden");
    card2.classList.remove("show");
  }
});
login.addEventListener("click", () => {
  card1.classList.remove("show");
  card2.classList.add("show");
});



// carousel code
// const carousel = document.querySelector(".menu-carousel");
// carousel.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   carousel.scrollBy({
//     left: e.deltaY,
//     behavior: "smooth",
//   });
// });

// footer year update
const year = document.querySelector(".upto-date");
const currentYear = new Date().getFullYear();
year.textContent = `©${currentYear} Haven Roaster. All rights reserved.`;
// navbar scroll effect
const navbar = document.querySelector(".nav-bar");
const scrolltop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
 const scrollheight = window.scrollY
 const navheight = navbar.getBoundingClientRect().height;
 if(scrollheight > navheight){
  navbar.classList.add("scrolled");
 } else {
  navbar.classList.remove("scrolled");
 }
 console.log(scrollheight,navheight);
 if(scrollheight > 500){
  scrolltop.style.display = "block";
 } else {
  scrolltop.style.display = "none";
 }
});
scrolltop.addEventListener("click", () => {  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});