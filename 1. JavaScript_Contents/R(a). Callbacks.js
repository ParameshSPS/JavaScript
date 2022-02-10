// Callbacks

function greeting() {
    console.log("Hi everone !");
};

setTimeout(greeting, 5000);


// Example

setTimeout(function () {
    console.log('Hi There !!');
}, 4000);

let btn = document.querySelector('button');

/*
console.log(btn);

btn.addEventListener('click', greet);

function greet() {
    alert('Hello There !!')
}
*/

btn.addEventListener('click', function () {
    alert('Hello There !!')
});