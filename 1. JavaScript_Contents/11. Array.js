// Arrays

// Empty array

let student = [];

// An array of strings
let lists = ['ice', 'paper', 'banana', 'mango'];

console.log('line no 10');
console.log(lists);

// An array of numbers
let myNumbers = [1, 2, 3, 4];

console.log('line no 16');
console.log(myNumbers);

// Mixed array
let myCollection = [1, 'mango', 4, 'banana', 5];

console.log('line no 22');
console.log(myCollection);


// Array length and index

let colors = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

length = colors.length;
// 6

console.log('line no 33');
console.log(colors.length);
// console.log(colors);


// Example

let paints = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

console.log('line no 42');
console.log(paints[4]);
// white

/*
paints[0] -------> red
paints[1]
paints[2]
paints[3]
paints[4] ------> whites
paints[9] -----> undefined
paints[paints.length-1] -------> blue
*/


// Modify array

let shirts = ['rad', 'yeellow', 'purple', 'indigo', 'white', 'blueray'];

shirts[0] = 'red';
shirts[1] = 'yellow';
shirts[5] = 'black';
shirts[6] = 'skyblue';
// or ------> add end position

shirts[shirts.length] = 'brown';
shirts[shirts.length] = 'pink';


console.log('line no 71');
console.log(shirts);
// [ 'red', 'yellow', 'purple', 'indigo', 'white', 'black', 'skyblue', 'browm', 'pink' ];