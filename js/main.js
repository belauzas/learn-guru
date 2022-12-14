import { isValidName, isValidEmail } from "./isValid.js";

const hamburgerDOM = document.querySelector('.hamburger');
const mainNavDOM = document.querySelector('nav');
const closeNavDOM = mainNavDOM.querySelector('.close');

hamburgerDOM.addEventListener('click', () => {
    mainNavDOM.classList.add('mobile-menu');
    mainNavDOM.classList.remove('hidden');
    hamburgerDOM.classList.add('hidden');
})

closeNavDOM.addEventListener('click', () => {
    mainNavDOM.classList.remove('mobile-menu');
    mainNavDOM.classList.add('hidden');
    hamburgerDOM.classList.remove('hidden');
})

const formDOM = document.getElementById('contact-form');
const nameDOM = document.getElementById('name');
const nameParentDOM = nameDOM.closest('.input');
const nameErrorDOM = nameParentDOM.querySelector('.error-msg');
const emailDOM = document.getElementById('email');
const emailParentDOM = emailDOM.closest('.input');
const emailErrorDOM = emailParentDOM.querySelector('.error-msg');

let sending = false;

formDOM.addEventListener('submit', (e) => {
    e.preventDefault();
    if (sending) return;

    const [nameErr, nameMsg] = isValidName(nameDOM.value);
    const [emailErr, emailMsg] = isValidEmail(emailDOM.value);
    nameParentDOM.classList.remove('error');
    emailParentDOM.classList.remove('error');

    if (nameErr) {
        nameErrorDOM.textContent = nameMsg;
        nameParentDOM.classList.add('error');
    }
    if (emailErr) {
        emailErrorDOM.textContent = emailMsg;
        emailParentDOM.classList.add('error');
    }

    if (!nameErr && !emailErr) {
        sending = true;
        fetch(formDOM.action, {
            method: 'POST',
            body: JSON.stringify({
                name: nameDOM.value,
                email: emailDOM.value,
            })
        }).then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                sending = false;
            })
    }
})