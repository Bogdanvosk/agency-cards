"use strict";

const moreOptionsButton = document.querySelector(".show-more");
const moreOptions = document.querySelector(".hidden-elements");
const menuIcon = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const btnShowMoreCards = document.querySelector(".btn-more");
const cardLinksHidden = document.querySelectorAll(".card-link--hidden");
const widgetTitles = document.querySelectorAll(".widget__title");
const widgetArrow = window.getComputedStyle(
   document.querySelector(".widget__title"),
   ":after"
);

// Показ и скрытие виджетов
widgetTitles.forEach((title) => {
   title.addEventListener("click", () => {
      title.nextElementSibling.classList.toggle("show-filter");
      title.classList.toggle("widget__title--active");
   });
});

// Показ доп карточек
btnShowMoreCards.addEventListener("click", () => {
   cardLinksHidden.forEach((item) => {
      item.classList.remove("card-link--hidden");
   });
});

// Фильтр на моб устройствах
menuIcon.addEventListener("click", () => {
   menuIcon.classList.toggle("open");
   sidebar.classList.toggle("active");
});

// Показ доп опций в фильтре
moreOptionsButton.addEventListener("click", () => {
   moreOptions.style.display = "block";
   moreOptionsButton.style.display = "none";
});


const checkboxAny = document.querySelector('#location05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param');

// Клик по кнопке "любая" и отключение всех остальных чекбоксов
checkboxAny.addEventListener('change', () => {
   if (checkboxAny.checked){
      topLocationCheckboxes.forEach(item => {
         item.checked = false;
      })
   }
})

// Клик по любому из верхних параметров и откючение кнопки "любая"
topLocationCheckboxes.forEach(item => {
   item.addEventListener('change', () =>{
         checkboxAny.checked = false;
   })
});
