"use strict";

var header = document.querySelector("header");
/*----Sticky Navbar----*/

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar); // slick slider

$('.tec').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});