const myForm = document.querySelector('.my-form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const messageInput = document.querySelector('#message');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);
    console.log(ageInput.value);
    console.log(messageInput.value);
}