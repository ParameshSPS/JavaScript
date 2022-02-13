// Arrow Functions

/*
const squares = function(x) {
    return x * x; //same as add,sub,multi,divide soo on
};
console.log(squares(3, 2));
*/

const greet = () => {

};

console.log('HI !!!!');
// HI !!!!


// Example

const square = (x) => {
    return x * x;
};
// Same as add, sub, multi, divide soo on

console.log(square(2, 2));
// 4


// Example

const isEven = num => {
    // function () remove (single)
    return num % 2 === 0;
    // return num % 2 !== 0;
};

console.log(isEven(10)); // true
console.log(isEven(9));  // false


// Example

const isPrimess = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
};

console.log(isPrimess(5));  // true
console.log(isPrimess(10)); // false
console.log(isPrimess(1));  // false
console.log(isPrimess(97)); // true


// Example

const multi = (x, y) => {
    return x * y;
    // same as add, sub, multi, divide soo on
    // return x * x; ----> 100
};

console.log(multi(10, 2));
// 20


// Implicit return

/*
const isEven = function(num) { 
    // regular function expression
    return num % 2 === 0;
    // return num % 2 !== 0;
};

const isEven = (num) => { 
    // arrow function with parens around param expression
    return num % 2 === 0;
    // return num % 2 !== 0;
};

const isEven = (num) => { 
    // arrow function with parens around param expression
    return num % 2 === 0;
    // return num % 2 !== 0;
};
*/
const isEvens = (num) => (
    // implicit return
    num % 10 === 0
    // num % 2 !== 0
);

console.log(isEvens(60));
// true

const isEvenss = num => num % 2 !== 0;
// one-linear implicit return

console.log(isEvenss(10));
// false


// Example

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let double1 = num.map(function (n) {
    // regular function
    return n * 2;
});

console.log(double1);

let double2 = num.map(n => {
    // arrow function
    return n * 3;
});

console.log(double2);

let double3 = num.map(n => n * 4);
// implicit return

console.log(double3);


// Example

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let parityList = nums.map(function (n) {
    // regular function
    if (n % 2 === 0)
        return 'is Even';
    return 'is Odd';
});

console.log(parityList);

let parityList1 = nums.map(n => {
    // arrow function
    if (n % 2 !== 0)
        return 'is a Num';
    return 'is a Nums';
});

console.log(parityList1);

let parityList2 = nums.map((n) => (
    // implicit return
    n % 2 === 0 ? 'is a Number' : 'is s Numbers'
));

console.log(parityList2);

let parityList3 = nums.map(n => n % 2 === 0 ? 'is a Numbering' : 'is s Numberings');
// one line implicit return

console.log(parityList3);