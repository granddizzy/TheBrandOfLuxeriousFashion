"use strict";

// menu
const menu = document.querySelector(".mainMenu");
const burger = document.querySelector(".buttonMenu");

function toggleMenu() {
  menu.classList.toggle("active");
}

burger.addEventListener("click", toggleMenu);

document.querySelector('#catalogButton').addEventListener('click', function () {
  window.location.href = 'catalog.html';
});

const jsonObj = JSON.parse(jsonData);

const shoppingCart = new Map();

const basketCounter = document.querySelector('div.basketCounter');
basketCounter.textContent = shoppingCart.size;