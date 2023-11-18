let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let close = document.querySelector('.close');
let modal = document.querySelector('.modal');
let mobile_List = document.querySelector('.mobile_list');
hamburger.addEventListener('click', () => {
    open.classList.toggle('hidden');
    close.classList.toggle('block');
    modal.classList.toggle('flex');
    mobile_List.classList.toggle('animatemenu')
})