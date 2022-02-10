// Events on multiple elements

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'white',
    'purple',
    'blue',
    'black',
    'indigo',
    'violet'
];

/*
const printColor = function(box) {
    console.log(box.style.backgroundColor);  //-----------> step 5
};
*/

/*
const printColor = function() {
    console.log(this);
    console.log(this.style.backgroundColor);  //-----------> step 6
};
*/

/*
const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', function() {
    console.log(this.innerText);             //--------> step 8
});
*/

const changeColor = function () {
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;    //-----------> step 7
};

const container = document.querySelector('#boxes'); //-----> step 1

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);                     //------> step 2

    /*
    box.addEventListener('click', function () {
        console.log('Clicked a Boxes');            -----------> step 3
    });
    */

    /*
    box.addEventListener('click', function () {
        console.log(box.style.backgroundColor); ---------------> step 4
    });
    */

    /*
    box.addEventListener('click', function() {
        printColor(box);                          //-----------> step 5
    });
    */

    // box.addEventListener('click', printColor); //-----------> step 6

    box.addEventListener('click', changeColor);  //-----------> step 7
};