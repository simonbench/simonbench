let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');
let hamburger = document.querySelector('#hamburger');

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', window.scrollY > 0)
});

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
    hamburger.classList.toggle('bx-x')
});