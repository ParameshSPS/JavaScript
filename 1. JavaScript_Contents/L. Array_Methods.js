// Array methods

// Push and Pop
// The push() method adds one or more elements to the end

let paints = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

paints.push('skyblue');
// paints[paints.length] = 'skyblue';

console.log('line no 11');
console.log(paints);


// The pop() method removes the last

let colors = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

colors.pop('blue');

console.log('line no 21');
console.log(colors);
// [ 'red', 'yellow', 'purple', 'indigo', 'white', ];


// Shift and Unshift
// The shift() method removes the first element

let body = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

body.shift('red');

console.log('line no 33');
console.log(body);
// [ 'yellow', 'purple', 'indigo', 'white', 'blue' ];


// The unshift() method adds one or more elements to the beginning

let beds = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

beds.unshift('brown', 'table');

console.log('line no 44');
console.log(beds);
// [ 'brown', 'table', 'red', 'yellow', 'purple', 'indigo', 'white', 'blue' ];


// Concat
// The concat() method is used to merge two or more arrays

let a = [0]
let a1 = [1, 2, 3, 4]
let a2 = [5, 6, 7, 8]

a3 = a.concat(a1, a2);
// merge a, a1, a2
// a3 = a.concat(a1)

console.log('line no 60');
console.log(a3);
// [0, 1, 2, 3, 4,5, 6, 7, 8]
// console.log(a.concat(a1, a2));


// Includes 
// The includes() method determines includes a certain value among its entries, returning T or F as appropriate
// look for a value

let index = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];
// let index = [ 1, 2, 3, 4 ];

index = index.includes('purple', 2);
// index = index.includes('purple'); -----> true
// index = index.includes(2); ------->  true

console.log('line no 77');
console.log(index);


// Example

let box = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

box = box.includes('purple', 4);
// index = index.includes('purple', 4); -----> false
// index = index.includes('parple'); -----> false

console.log('line no 89');
console.log(box);

/*
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
*/


// IndexOf
// Just like a string indexOf
// -1 if it is not present

let data = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

data = data.indexOf('blue')
// 5
// data = data.indexOf('blue', 5) // 5
// data = data.indexOf('blue', 2) // 5
// data = data.indexOf('skyblue') // -1
// data = data.indexOf('white', 5) // -1

console.log('line no 115');
console.log(data);

/*
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
*/


// join

let elements = [1, 2, 3, 4]

elements = elements.join(' + ');

console.log('line no 134');
console.log(elements);
// 1 + 2 + 3 + 4 

/*
var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'
*/


// Reverse
/*
The reverse() method reverses an array in place. 
The first array element becomes the last, and the last array element becomes the first
*/

let element = [1, 2, 3, 4]

element = element.reverse();

console.log('line no 157');
console.log(element);
// [ 4, 3, 2, 1 ]

/*
const a = [1, 2, 3];
console.log(a); 
// [1, 2, 3]

a.reverse();
console.log(a); 
// [3, 2, 1]
*/


// Slice ----------->  completed in models topic (Slice & Splice/Replace)
// Copy elements

let friends = ['param', 'hari', 'naveen', 'gopal', 'dog'];

// friends = friends.slice();

console.log('line no 179');
console.log(friends.slice(2));
// expected output: ['naveen', 'gopal', 'dog']

console.log(friends.slice(2, 4));
// expected output: ['naveen', 'gopal']

console.log(friends.slice(1, 5));
// expected output: ['hari', 'naveen', 'gopal', 'dog']

console.log(friends.slice(-2));
// expected output: ['gopal', 'dog']

console.log(friends.slice(2, -1));
// expected output: ['naveen', 'gopal']


// Splice/Replace
// splice(start, deleteCount, item1, item2, itemN)

let x = ['2001', '2002', '2004', '2011', '2006', '2008', '2010'];

x.splice(2, 0, '2003')
// [ '2001', '2002', '2003', '2004', '2011', '2006', '2008', '2010' ];

console.log('line no 204');
console.log(x);


// Example

let z = ['2001', '2002', '2003', '2004', '2011', '2006', '2008', '2010'];

z.splice(4, 1, '2005')
// ['2001', '2002', '2003', '2004', '2005', '2006', '2008', '2010']

console.log('line no 215');
console.log(z);


// Example

let s = ['2001', '2002', '2003', '2006',];

s.splice(3, 0, '2004', '2005')
// [ '2001', '2002', '2003', '2004', '2005', '2006' ]

console.log('line no 226');
console.log(s);


// Example

let p = ['2001', '2002', '2003', '2006',];

p.splice(3, 1, '2004', '2005')
// [ '2001', '2002', '2003', '2004', '2005' ]

console.log('line no 237');
console.log(p);


// Sort

let names = ['param', 'hari', 'naveen', 'gopal', 'dog'];

names = names.sort()
// [ 'dog', 'gopal', 'hari', 'naveen', 'param' ]

console.log('line no 248');
console.log(names);


// Example

let g = ['2001', '1002', '1503', '204', '0011', '26', '8', '210'];

g = g.sort();
// ['0011', '1002', '1503', '2001', '204', '210','26', '8']

console.log('line no 259');
console.log(g);


// Nested 

let colorthemes = [
    ['red', 'blue'],
    ['green', 'voilet'],
    ['purple', 'white'],
    ['param', ['hari', 'naveen']]
];

console.log('line no 272');
console.log(colorthemes[0]);
// [ 'red', 'blue' ]

console.log(colorthemes[0][1]);
// blue

console.log(colorthemes[1][0]);
// green

console.log(colorthemes[2]);
// [ 'purple', 'white' ]

console.log(colorthemes[3][1]);
// [ 'hari', 'naveen' ]