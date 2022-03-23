const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

function toggleMenu() {
    burger.classList.toggle('open');
    navigation.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);