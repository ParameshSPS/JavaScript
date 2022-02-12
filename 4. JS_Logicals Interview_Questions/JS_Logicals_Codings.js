// JavaScript Logicals

// Example

var str = "Full Stack Tutorials";

var output = str
    .split("")
    .reverse()
    .join("");
console.log(output);
// slairotuT kcatS lluF


// Using array reduce() method

var array = [1, 2, 5, 10, 20];

var sum = array.reduce((a, i) => {
  return a + i;
});

console.log(sum);
// 38


// Using loops (e.g. - for loop)

var list = [1, 2, 5, 10, 20];

var sum = 0;
for (let i in list) {
  sum += list[i];
}

console.log(sum);
// 38


// Example 

let x = 10;

var x = 20;

console.log(x);
// SyntaxError: Identifier 'x' has already been declared


// Example 

const a = { x: 1, y: 2 };

const b = a;

b.x = 3;

console.log(a); // { x: 3, y: 2 }
console.log(b); // { x: 3, y: 2 }


// Example 

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NULL);
console.log(typeof typeof 1);

// undefined
// object
// undefined
// string


// Example 

var a = 3;
var b = a++;
var c = ++a;

console.log(a, b, c)

// 5 3 5


// JavaScript startsWith and endsWith?

let name = "Full Stack Tutorials, Latest Interview Questions and Answers!";

// startsWith
console.log(name.startsWith("Full")); // true
console.log(name.startsWith("full")); // false
console.log(name.startsWith("Tutorials")); // false
console.log(name.startsWith("Tutorials", 11)); // true

// endsWith
console.log(name.endsWith("Answers!")); // true
console.log(name.endsWith("answers!")); // false


// Example 

function func1() {
    return {
        name: "Full Stack Tutorials",
    };
};

console.log(func1());
// { name: 'Full Stack Tutorials' }


function func2() {
    return;
    {
        name: "Full Stack Tutorials";
    }
};

console.log(func2());
// undefined


// Example 

const number = undefined + 11;
if (number === NaN) {
    console.log("NaN");
} else if (number === 11) {
    console.log("11");
} else {
    console.log("other");
};

// other


// Example 

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(a[i]), 1000);
}

for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(a[i]), 1000);
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined


// How to convert an Array [] to Object {} in JavaScript?

let arr = ["1", "Test User", "25", "Developer"];
let arr1 = [
    ["id", "1"],
    ["name", "Test User"],
    ["age", "25"],
    ["profession", "Developer"],
];

// Method 1: Using Object.assign() method
console.log(Object.assign({}, arr));
// {0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 2 Using Spread operator
console.log({ ...arr });
// {0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 3: Using Object.fromEntries() method
console.log(Object.fromEntries(arr1));
// {id: "1", name: "Test User", age: "25", profession: "Developer"}


// How to convert an Object {} into an Array [] in JavaScript?

let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

// Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "profession"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "Test User", "25", "Developer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
// [["id", "1"],["name", "Test User"],["age", "25"],["profession", "Developer"]]