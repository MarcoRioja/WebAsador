//Modal

const openModalCola = document.querySelector('.modalCola');
const modalCola = document.querySelector('.modal__Cola');
const closeModalCola = document.querySelector('.modal__closeCola');

openModalCola.addEventListener('click', (e) =>{
    e.preventDefault();
    modalCola.classList.add('modal--show');
})

closeModalCola.addEventListener('click', (e) =>{
    e.preventDefault();
    modalCola.classList.remove('modal--show');
})