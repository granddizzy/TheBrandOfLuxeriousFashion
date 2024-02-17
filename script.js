const menu = document.querySelector(".mainMenu");
const burger = document.querySelector(".buttonMenu");

function toggleMenu() {
    menu.classList.toggle("active");
}

burger.addEventListener("click", toggleMenu);