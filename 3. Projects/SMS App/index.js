// SMS App

const { hash } = window.location;

// console.log(atob(hash.replace('#', '')));

const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    // const input = document.querySelector('input');
    // console.log(input.value);  

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    // document.querySelector('#link-input').value = encrypted;

    // document.querySelector('#link-input').value = `${window.location}#${encrypted}`;

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    input.select();
});