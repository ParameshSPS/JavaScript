// scope = variable 'visibility'

// Function scope

function helpMe() {
    let msg = 'i am a fire';
    console.log(msg);
};

helpMe();
// console.log(msg); ----> undefined


// Function scope

let bird = 'duck';

function birdwatch() {

    let bird = "peacock";
    console.log(bird.toLocaleUpperCase()); 
};
// PEACOCK

birdwatch();
console.log(bird); 
// duck


// Function scope

function data() {
    let person = 'hari';
    let age = 26;
    let color = 'white';
    console.log(age);
};

function datas() {
    let name = 'param';
    let age = 24;
    let color = 'black';
    console.log(name, age, color);
};

data();
datas();


// Block scope
// conditons = if, switch, for loops, while loops;
// var, let, const

// var

if (true) {
    var item = 'paramesh'; 
    console.log(item);
};

console.log(item); 
// paramesh

// let

if (true) {
    let user = 'hari'; 
    console.log(user);
};

// const

if (true) {
    const username = 'naveen'; 
    console.log(username);
};


// Block scope using condition

function color() {
    let colors = ['pink', 'red', 'blue', 'purple']

    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    };
};

color();


// Block scope using condition

let animals = ['dog', 'tiger', 'lion', 'elephant']
var i = 10; //--------- not run
for (var i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
};

console.log(i); 
// 4


// Block scope using condition

let animal = ['dog', 'tiger', 'lion', 'elephant'];

let a = 10;
for (let i = 0; i < animal.length; i++) {
    console.log(i, animal[i]);
};

console.log(a); 
// 10
// same as const


// Block scope

let radius = 8;

if (radius > 0) {
    const PI = 3.14;
    let circ = 2 * PI * radius;
    console.log(circ); //50.24
};

console.log(radius);
// console.log(circ);-------> undefined
// console.log(PI);-------> undefined


// Block scope

function doubleArr(arr) {
    const result = [];
    for (let num of arr) {
        let double = num * 2;
        result.push(double)
    };
    return result;
}; 
// 8


// Lexical scope
// function of function

function outer() {
    let hero = 'Magadheera';

    function inner() {
        let x = (`${hero} is my favourite hero.`)
        // console.log(`${hero} is my favourite hero.`);
        console.log(x.toUpperCase());
        //console.log(x);
    };

    inner();
};

outer();
// MAGADHEERA IS MY FAVOURITE HERO.


// Lexical scope

function outerTwo() {
    let movies = 'Khalejaa';

    function innerTwo() {
        let movie = 'Robo'
        console.log(`${movie} and ${movies} is one my favourite movie`);
    };

    innerTwo();
};

outerTwo();