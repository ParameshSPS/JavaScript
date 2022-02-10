// Dom Events
// Responding to user inputs and actions!

/*
THE THING         EVENT TYPE            THE CODE TO RUN

Button              Click               Change the color
Input               Hits return         Get search results
Image               Mouse over          Display the img caption
*/

// Two ways NOT to add event handlers

// Inline - take a look at index.html
// Check out index.html to see an example

// Via JS - setting the onclick property

// Select an element:

const btn = document.querySelector('#clicker');

// Set the onclick property to a function:

// You can use an existing function: (not that common)

btn.onclick = greet;

// Or use an anonymous function (more common)

btn.onclick = function () {
    console.log('Click me go away');
}

btn.onclick = () => {
    console.log('YOU CLICKED ME UGHHHH!!');
}

function greet() {
    alert('HEY BUDDY!')
}


// Double click

const btns = document.querySelector('#clicker');

btns.ondblclick = function () {
    console.log('double click');
}

btns.ondblclick = () => {
    console.log('hey hello');
}


// AddEventListener

const button = document.querySelector('h1');

button.addEventListener('click', () => {
    alert('You Click Me Broo!');
});

button.addEventListener('click', function () {
    console.log('Second You Click Me Broo!');
});

const buttons = document.querySelector('#click');

buttons.addEventListener('click', () => {
    alert('Clicked!');
});

buttons.addEventListener('click', function () {
    console.log('Second Clicked!');
});

buttons.addEventListener('click', function () {
    buttons.innerText = 'Second Clicked!';
});

buttons.addEventListener('mouseover', function () {
    buttons.innerText = 'Second Clicked!';
});

buttons.addEventListener('mouseout', function () {
    buttons.innerText = 'Click me bro!';
});

window.addEventListener('scroll', function () {
    console.log('stop scrolling');
});