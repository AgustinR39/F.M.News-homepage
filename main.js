let menu = document.querySelector('.menu-icon');
let close = document.querySelector('.close-icon');
let modalNavbar = document.querySelector('.navbar-background');

menu.addEventListener('click', () => {
    modalNavbar.style.display = 'block';
})

close.addEventListener('click', () => {
    modalNavbar.style.display = 'none';
})