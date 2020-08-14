const $navToggle = document.querySelector('.nav-toggle');
const $navContent = document.querySelector('.nav__content');

$navToggle.onclick = () => {
    $navContent.classList.toggle('nav--visible');
}