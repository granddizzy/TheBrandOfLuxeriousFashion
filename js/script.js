"use strickt";

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

// fetured Items
const feturedItemsObj = JSON.parse(feturedItems);
const templateFeturedItemEl = document.querySelector('#templateFeturedItem').content;
const catalogItemsEl = document.querySelector('div.catalogItems');

feturedItemsObj.feturedItems.forEach(item => {
  const clone = document.importNode(templateFeturedItemEl, true);
  clone.querySelector('div.catalogItem__photo').firstElementChild.src = item.photo;
  clone.querySelector('h3.catalogItem__title').textContent = item.title;
  clone.querySelector('p.catalogItem__description').textContent = item.description;
  clone.querySelector('p.catalogItem__price').textContent = item.price;

  catalogItemsEl.appendChild(clone);
})

document.querySelectorAll('div.catalogItem').forEach(div => {
  div.addEventListener('click', function() {
    window.location.href = 'product.html';
  });
});