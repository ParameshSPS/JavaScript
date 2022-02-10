// New js Features

// The old way

function multiply(x, y) {
    return x * y;
};

console.log(multiply(1, 2));
// 2

console.log(multiply(4));
// NaN


// new way

function multiplys(x, y) {
    if (typeof y === 'undefined') {
        y = 1;
        // y = typeof y === 'undefined' ? 1 : y;
    };

    return x * y;
};

console.log(multiplys(2, 2));
// 4

console.log(multiplys(6));
// 6


// New way

function multi(a, b = 1) {
    return a * b;
};

console.log(multi(4)); //4
console.log(multi(4, 4)); //16


// Example

function multii(a = 1, b) {
    return a * b;
};

console.log(multii(4));
// NaN

console.log(multii(4, 4));
// 16


// New way

const greet = (name, greet = 'yoyo') => {
    console.log((`${name}, ${greet}!`));
};

console.log(greet('gopal', 'h r u'));
console.log(greet('gopal'));


// Example

const greets = (name, greet = 'Hello') => `${greet}, ${name}`;

console.log(greets('param', 'Hi'));

console.log(greets('Hari'));


// Example 

const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y);
};

console.log(blah(3));
// 3 [ 1, 2, 3 ]

console.log(blah(1, 2));
// 1 2

console.log(1, 3);
// 1 3


// Example

const greeting = (name, greet = 'yoyo', punctuation = '!') => {
    console.log((`${greet}, ${name} ${punctuation}`));
};

console.log(greeting('gopal'));
// yoyo, gopal !


// Spread for function calls

const num = [3, 7, 9, 24, 21, 36, 47, 55, 66, 79];

console.log(Math.max(num));
// NaN

console.log(Math.max(...num));
// 79


// Example

const nums = [3, 7, 9, 24, 21, 36, 47, 55, 66, 79];

const max = Math.max(3, 7, 9, 24, 21, 36, 47, 55, 66, 79, 99);

console.log(max);
// 99


// Example

function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
};

// let color = ['blue', 'green', 'orange', 'white'];

console.log(giveMeFour(1, 2, 3, 4));

console.log(giveMeFour(...['blue', 'green', 'orange', 'white']));
// console.log(giveMeFour(...color));

console.log(giveMeFour(...'Paramesh'));


// Spread in Array Literals
// Create a new array using an existing array. Spreads the elements from one array into a new array

const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];

console.log(...num1, ...num2);
// 1 2 3 4 5 6 7 8

console.log(0, ...num1, ...num2);
// 0 1 2 3 4 5 6 7 8

console.log(...num1, ...num2, 9, 10);
// 1 2 3 4 5 6 7 8 9 10

console.log('a', 'b', ...num1, ...num2);
// a b 1 2 3 4 5 6 7 8


// Example 

const colorPalleteOne = [...'blue', 'green', 'orange', 'white'];
const colorPalleteTwo = ['black', 'pink', 'brown'];
const colorPallete = ['black', 'purple', 'red'];

const allColor = [...colorPalleteOne, ...colorPalleteTwo];

console.log([...colorPallete, ...colorPalleteTwo]);
console.log(allColor);


// Example

const colorPalleteThree = ['blue', 'green', 'orange', 'white'];
const colorPalleteFour = ['black', 'pink', 'brown'];

const allColors = ['violet', ...colorPalleteThree, ...colorPalleteFour];

console.log(allColors);


// Spread in object Literals
// Copies properties from one object into another object literal

const details = {
    name: 'Paramesh Sidhanatham',
    age: 24,
    favColor: 'Purple'
};

const education = {
    grad: 'B.Tech/Civil Engg.'
};

const allDetails = { ...details, ...education, test: 'Infosys' };

console.log(allDetails);


// Example

const feline = {
    legs: 4,
    family: 'Wild Animal'
};

const caninae = { family: 'caninae', furry: true, legs: 4 };

const dog = { ...caninae, isPet: true, adorable: true };

const houseCat = { ...feline, isGrumpy: true, personality: 'unpredictable' };

const houseDog = { ...caninae, ...feline }

console.log(houseDog);

console.log({ ...dog, ...houseCat, ...colorPalleteFour });


// Rest
// It looks like spread, but it's not!

function sum() {
    const argsArr = [...arguments];
    return argsArr.reduce((total, val) => total + val)
    // return argsArr.reduce((total, val) => {
    // return total + val})
};

console.log(sumAll(1, 2, 3, 4, 5));
// 15


// The arguments object

function sumAll() {
    let total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index];
    };
    return total;
};

console.log(sumAll(8, 4, 3, 2));
// 17

console.log(sumAll(3, 2));
// 5


// Example

function fullName(first, last, ...titles) {
    console.log(first);
    console.log(last);
    // console.log('last', last);
    console.log(titles);
}

console.log(fullName('paramesh', 'sidhanatham', 'Mr.', 'Dr.'));


// Example

const multiplyTwo = (...nums) => nums.reduce((total, val) => total * val);

console.log(multiplyTwo(1, 2, 3, 4));
// 24

/*
function multiplyTwos(...nums) {
    return nums.reduce((total, val) => {
        return total * val
    });
};

console.log(multiplyTwos(4,5,6,7)); //840
*/


// Destructuring array

const names = ['Paramesh', 'Gopal', 'Naveen', 'Hari', 'Mallesh'];

/*
const gold = names[0];
const silver = names[1];
const bronze = names[2];

console.log(gold); //Paramesh
console.log(bronze); //Naveen
*/

const [gold, silver, brozen] = names

console.log(gold);
// Paramesh

const [first, , third] = names;

console.log(first);
console.log(third);

const [second, ...other] = names;

console.log(second);
console.log(other);


// Destructuring objects

const runner = {
    firsts: 'Paramesh',
    last: 'Sidhanatham',
    country: 'India',
    title: 'Elder of the Order of the Golden Heart of India'
};

const { firsts, last, country } = runner;

console.log(firsts);
// Paramesh

console.log(last);
// Sidhanatham

console.log(country);
// India

console.log(firsts, last);
// Paramesh Sdhanatham

const { country: nation, title: nickName } = runner;

console.log(nation, nickName);


// Example

const meTwo = {
    testOne: 'Param',
    testTwo: 'Sidhanatham',
    testThree: 'India/A.P',
    testFour: 'Mr. No Feelings'
};

const { testOne, testTwo, ...othersToo } = meTwo;

console.log(testOne, testTwo, othersToo);


// Nested destructuring 

const results = [
    {
        firstName: 'Padhu',
        lastName: 'Sidhanatham',
        countrys: 'India/A.P'
    },
    {
        firstName: 'Neelima',
        lastName: 'Battibrolu',
        countrys: 'Ethiopia'
    },
    {
        firstName: 'vandana',
        lastName: 'Pulagoora',
        countrys: 'United States'
    }
];

const [, { lastName }] = results;
const [{ firstName: goldWinner }, , { countrys }] = results;

console.log(lastName);
// Battibrolu

console.log(goldWinner, countrys);


// Param destructuring

const fullNames = ({ first, last }) => {
    return `${first} ${last}`;
};

const runners = {
    first: 'Hari',
    last: 'Krishna',
    country: 'India',
    title: 'Mr. No Feelings'
};

console.log(fullNames(runners));
// Hari Krishna


// Example

function prints({ first, last }) {
    console.log(first, last);
};

const runnering = {
    first: 'Param',
    last: 's',
    country: 'India',
    title: 'Mr. No Feelings'
};

prints(runnering);
// Param S


// Example

const run = {
    firstNames: 'Hari Gopal',
    lastNames: 'Krishna Rao',
    country: 'India',
    title: 'Mr. No Feelings'
};

function print(person) {
    const { firstNames, lastNames, title } = person;
    console.log(`${firstNames} ${lastNames} ${title}`);
};

print(run);


// Example

const bioData = {
    firsts: 'Gopal Naik',
    lasts: 'Krishna Rao',
    country: 'India',
    titles: 'Mr. No Feelings'
};

function printing({
    firsts, lasts, titles
}) {
    console.log(`${firsts} ${lasts} ${titles}`)
};

printing(bioData);


// Example

const response = [
    'HTTP/2.2',
    '200 OK',
    'application/json'
];

function parseResponse([protocol, status, type]) {
    console.log(protocol);
    console.log(status);
    console.log(`status: ${type}`);
}

parseResponse(response);