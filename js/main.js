"use strict";

const moreOptionsButton = document.querySelector(".show-more");
const moreOptions = document.querySelector(".hidden-elements");
const menuIcon = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', () =>{
   menuIcon.classList.toggle('open');
   sidebar.classList.toggle('active');

})


moreOptionsButton.addEventListener("click", () => {
   moreOptions.style.display = "block";
   moreOptionsButton.style.display = "none";
});


