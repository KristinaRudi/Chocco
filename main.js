const burger = document.getElementById("burger");
const menu = document.getElementById("fsmenu");
const closefs = document.getElementsByClassName("menu__item");


burger.addEventListener('click', (e) => {
    menu.classList.toggle('fullscreen-menu--active');
    burger.classList.toggle('hamburger--active');
})


for (var i = 0; i < closefs.length; i++) {
    closefs[i].addEventListener('click', (e) => {
        menu.classList.toggle('fullscreen-menu--active');
        burger.classList.toggle('hamburger--active');
    })
}

