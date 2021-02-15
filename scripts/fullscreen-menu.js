const burger = document.getElementById("burger");
const menu = document.getElementById("fsmenu");
const closefs = document.getElementsByClassName("menu__item");

function toggleMenu (e) {
    menu.classList.toggle('fullscreen-menu--active');
    burger.classList.toggle('hamburger--active');
}

burger.addEventListener('click', toggleMenu)

// for (var i = 0; i < closefs.length; i++) {
//     closefs[i].addEventListener('click', toggleMenu)
// }

menu.addEventListener('click', e => {
    console.log(e)
    if (
        e.target.classList.contains('menu__link')
    ) {
        toggleMenu()
    }
})


