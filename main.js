const BURGER = document.getElementById("burger")
const MENU = document.getElementById("fsmenu")

BURGER.addEventListener('click', (e) => {
    MENU.classList.toggle('fullscreen-menu--active');
    BURGER.classList.toggle('hamburger--active');
})


