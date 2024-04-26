const catalogItemsEl = document.querySelector('div.catalogItems');
const templateShoppingCartItemEl = document.querySelector('#templateShoppingCartItem').content;
const templateFeturedItemEl = document.querySelector('#templateFeturedItem').content;
const shoppingCartEl = document.querySelector('div.shoppingCart__leftSide');
const shoppingCartContainterEl = document.querySelector('section.shoppingCart');

// fetured items
jsonObj.items.forEach(item => {
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
  }

  if (e.target.closest('div.catalogItem__text')) {
    window.location.href = 'product.html';
  }
})

document.querySelector('section.shoppingCart').addEventListener('click', function (e) {
  if (e.target.classList.contains('shoppingItem__crossButton')) {
    const itemId = e.target.closest('div.shoppingItem').getAttribute('data-id')
    delCartItem(itemId);
  }
})

function addCartItem(itemId) {
  const item = getItem(itemId);

  if (!shoppingCart.has(parseInt(itemId))) {
    shoppingCart.set(parseInt(itemId), item);
    const clone = document.importNode(templateShoppingCartItemEl, true);

    clone.querySelector('div.shoppingItem').setAttribute('data-id', itemId);
    clone.querySelector('h1').textContent = item.title;
    clone.querySelector('div.shoppingItem__wrap').firstElementChild.src = item.photo;
    clone.querySelector('span.shoppingItem__price').textContent = item.price;
    clone.querySelector('span.shoppingItem__color').textContent = item.color;
    clone.querySelector('span.shoppingItem__size').textContent = item.size;
    shoppingCartEl.appendChild(clone);
  }

  checkShoppingCartVisibility();
}

function delCartItem(itemId) {
  if (shoppingCart.has(parseInt(itemId))) {
    shoppingCart.delete(parseInt(itemId));
    const el = document.querySelector(`.shoppingItem[data-id="${itemId}"]`);
    el.remove();
  }

  checkShoppingCartVisibility();
}

function getItem(itemId) {
  return jsonObj.items.find(item => item.id === parseInt(itemId));
}

function checkShoppingCartVisibility() {
  if (shoppingCart.size > 0) {
    if (shoppingCartContainterEl.classList.contains('hidden')) shoppingCartContainterEl.classList.remove('hidden');
  } else {
    if (!shoppingCartContainterEl.classList.contains('hidden')) shoppingCartContainterEl.classList.add('hidden');
  }

  basketCounter.textContent = shoppingCart.size;
}