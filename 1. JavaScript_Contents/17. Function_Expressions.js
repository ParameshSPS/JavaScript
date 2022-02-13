// Function Expressions

function add(x, y) {
    return x + y;
};

add(1, 1);
// let sum = add(1,1);

console.log(add(1, 1));
// 2
// console.log(sum);


// Example

const square = function (x, y) {
    return x * y;
};

square(2, 2);

console.log(square(2, 2));
// 4

/*
const squareEx = function plus(x, y) {
    return x - y;
};

let addEx = squareEx(2,2);

console.log(addEx); //0
*/


// Higher order function 

function add1(x, y) {
    return x + y;
};
// 12

const sub = function (x, y) {
    return x - y;
};
// 8

function multiply(x, y) {
    return x * y;
};
// 20

const divide = function (x, y) {
    return x / y;
};
// 5

const operators = [add1, sub, multiply, divide];

for (let index = 0; index < operators.length; index++) {
    console.log(operators[index](10, 2));
};

/*
for  (let func of operators) {
    console.log(func(2,2));
};

for  (let func of operators) {
    let result = func(10, 4);
    console.log(result);
};
*/

const thing = {
    doSomething: multiply
};

console.log('line no 80');
console.log(thing.doSomething(5, 7));
// 35

/*
const thing1 = {
    doSomething: add1
};

console.log('line no 70');
console.log(thing1.doSomething(5, 5)); 
// 10
*/


// Functions as arguments 

function callThreeTimes(f) {
    f();
    f();
    f(); //--------> repeatition
};

function Id() {
    console.log('My Name is Paramesh');
};

function age() {
    console.log('And I\'m 24 years old');
};

callThreeTimes(age);
// And I\'m 24 years old ----> 3 times


// Repeating

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    };
};

repeatNTimes(Id, 5);
// My Name is Paramesh ----> 5 times

/*
function greet() {
    console.log('Hoooo');
};

function repeatNTimes(action) {
    for (let i = 0; i < 10; i++) {
        action();
    };
};

repeatNTimes(greet); 
// 'Hoooo' ----> 10 times
*/

// Example

function pickOne(f1, f2) {
    // {
    //     Math.random() > 0.5 ? f1() : f2()
    // }
    let rand = Math.random();
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    };
};

pickOne(Id, age);


// Functions as return values

function multiplyBy(num) {
    return function (x) {
        return x * num
    };
};

const triple = multiplyBy(10)
const double = multiplyBy(2)

console.log(triple(4));
// 40

console.log(double(4));
// 8


// Example

function makeBetweenFunc(x, y) {
    return function (num) {
        return num >= x && num <= y;
    };
};

const isChild = makeBetweenFunc(1, 17);

const isNinties = makeBetweenFunc(2000, 2021)

console.log(isChild(19));
// false

console.log(isNinties(2001));
// true

console.log(isNinties(1998));
// false


// Hoisting

console.log(nameId);
//-------> undefined or code not run

var nameId = 'param';

console.log(nameId);
// param --------> code run


// Example

// console.log(nameIds); -------> error 

let nameIds = 'paramesh';

console.log(nameIds);
// paramesh --------> code run


// Example 

// console.log(nameIdss); -------> error

const nameIdss = 's param';

console.log(nameIdss);
// s param --------> code run


// function Example

hello();
// i am a boy --------> code run

function hello() {
    console.log('i am a boy');
};

hello();
// i am a boy --------> code run


// Function expressions example

// hoot(); --------> code not run

let hoot = function () {
    console.log('hello my dear friend');
};

hoot();
// 'hello my dear friend' -------> code run