// While Loop

let input = [
    {
        name: 'Hari',
        age: 26,
    },
    {
        name: 'Param',
        age: 24,
    },
    {
        name: 'Krishna',
        age: 26,
    },
    {
        name: 'Test',
        age: 26,
    },
];

let index = 0;
while (index <= 3) {
    console.log(input[index]);
    // console.log(input[index].name); 
    // console.log(input[index].age);
    index++;
};


// Example

let test = [
    {
        name: 'Hari',
        age: 26,
    },
    {
        name: 'Param',
        age: 24,
    },
    {
        name: 'Krishna',
        age: 26,
    },
    {
        name: 'Test',
        age: 26,
    },
];

for (let item of test) {
    console.log(item.name);
    //console.log(item.age);    
};


// Break

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    };
    console.log(i);
};


// Example

let a = 1;

while (a <= 10) {
    if (a === 5) {
        break;
    };
    a++;

    console.log(a);
};


// For of loops statement
// For (var of iterables) statement

let colors = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

for (let i = 0; i <= colors.length; i++) {
    console.log(colors[i]);
};

for (color of colors) {
    console.log(color);
};


// Example

let data = [
    {
        name: 'Hari',
        age: 26,
    },
    {
        name: 'Param',
        age: 24,
    },
    {
        name: 'Krishna',
        age: 26,
    },
    {
        name: 'Test',
        age: 26,
    },
];

for (list of data) {
    console.log(data);
};


// Example

const marks = {
    param: 7,
    hari: 10,
    naveen: 9,
    raj: 10
};

for (let score of Object.keys(marks)) {
    console.log(`${score} = ${marks[score]}`);
};

let score = Object.values(marks);

let total = 0;
for (let s of score) {
    total += s;
};

let avg = total / score.length;
// 36/4

console.log(avg);
// 9

console.log(total / score.length);
// 9

console.log(total);
// 36


// For in loop statement
// For (var in object) statement

const num = {
    param: 55,
    hari: 66,
    naveen: 77,
    raj: 10
};

for (let abcd in num) {
    console.log(abcd);
    console.log(num[abcd]);
};

let amount = 0;
for (let abcd in num) {
    amount += num[abcd];
};

console.log(amount);
console.log(`This is a number ${amount}`);

for (let s in [10, 20, 30, 40]) {
    console.log(s);
};