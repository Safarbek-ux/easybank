let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let close = document.querySelector('.close');
hamburger.addEventListener('click', () => {
    open.classList.toggle('hidden');
    close.classList.toggle('block')
})