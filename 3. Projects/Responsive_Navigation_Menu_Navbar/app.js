// Responsive Navigation Menu Navbar

const menu = document.querySelector('#mobile-menu');

const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// Modal Items 

const modal = document.getElementById('email-modal');

const openBtn = document.querySelector('.main-btn');

// const openBtn1 = document.querySelector('.nav-links-btn');

const closeBtn = document.querySelector('.close-btn');


// Click Events

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// openBtn1.addEventListener('click', () => {
//     modal.style.display = 'block';
// });

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})


// Form validation

const form = document.getElementById('form');

const name = document.getElementById('name');

const email = document.getElementById('email');

const password = document.getElementById('password');

const passwordConfirm = document.getElementById('password-confirm');


// Show Error Message 

function showError(input, message) {
    const formValidation = input.parentElement;
    // formValidation.classList = 'form-validation error';
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}


// Show Valid Message 

function showValid(input) {
    const formValidation = input.parentElement;
    // formValidation.classList = 'form-validation error';
    formValidation.className = 'form-validation valid';
}


// Check Required Fields

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            // showError(input, 'Input error')
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showValid(input);
        }
    })
}


// Check Input Length 

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be least ${min} character`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} character`);
    } else {
        showValid(input);
    }
}


// Check Password Match 

function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match')
    }
}


// Get FieldName

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}


// Event Listeners 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password, passwordConfirm]);

    checkLength(name, 3, 30);

    checkLength(password, 8, 25);

    checkLength(passwordConfirm, 8, 25);

    passwordMatch(password, passwordConfirm)
})