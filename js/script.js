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

// fetured Items
const feturedItemsObj = JSON.parse(feturedItems);
const templateFeturedItemEl = document.querySelector('#templateFeturedItem').content;
const catalogItemsEl = document.querySelector('div.catalogItems');

feturedItemsObj.feturedItems.forEach(item => {
  const clone = document.importNode(templateFeturedItemEl, true);
  clone.querySelector('div.catalogItem').setAttribute('data-id', item.id);
  clone.querySelector('div.catalogItem__photo').firstElementChild.src = item.photo;
  clone.querySelector('h3.catalogItem__title').textContent = item.title;
  clone.querySelector('p.catalogItem__description').textContent = item.description;
  clone.querySelector('p.catalogItem__price').textContent = item.price;

  catalogItemsEl.appendChild(clone);
})

document.querySelector('div.catalogItems').addEventListener('click', function (e) {
  // Метод closest() возвращает ближайший родительский элемент, который соответствует указанному селектору, или null,
  //   если такой элемент не найден.
  if (e.target.closest('div.catalogItem__button')) {
    const itemId = e.target.closest('div.catalogItem').getAttribute('data-id');
    addCartItem(itemId);
  } else {
    window.location.href = 'product.html';
  }
})

document.querySelector('div.shoppingCart').addEventListener('click', function (e) {
  if (e.target.classList.contains('shoppingItem__crossButton')) {
    const itemId = e.target.closest('div.shoppingItem').getAttribute('data-id')
    delCartItem(itemId);
  }
})

function addCartItem(itemId) {

}

function delCartItem(itemId) {

}