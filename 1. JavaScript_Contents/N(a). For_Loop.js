// For Loop
// for ([initialExpression]; [conditionExpression]; [increment/decrementExpression]) statement

for (let i = 0; i <= 10; i++) {
    console.log('Hello! :', i);
};


// Example

for (let i = 1; i <= 10; i++) {
    console.log('2 * ' + i + ' = ' + (2 * i));
    i = i + 2;
    /*
    i = i + 2;
    i + 2;
    i = i + 1;
    
    2 * 1 = 2    
    2 * 4 = 8
    2 * 7 = 14
    2 * 10 = 20
    */
};


// Example

for (let i = 1; i <= 10; i++) {
    console.log('1 * ' + i + ' = ' + (1 * i));
    //console.log(`${4}*${i} = ${4*i}`);
};


// Example

for (let i = 1; i <= 10; i++) {
    console.log(`${i}*${i} = ${i * i}`);
};


// Example

for (let i = 1; i <= 10; i++) {
    console.log(`${4}*${i} = ${4 * i}`);
};


// Example

for (let i = 10; i >= 1; i--) {
    console.log('20 * ' + i + ' = ' + (20 * i));
};


// Example

for (let i = 50; i >= 0; i -= 10) {
    console.log(i);
};


// Example (Array of Loop)

let colors = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

for (let index = 0; index <= 5; index++) {
    // const element = colors[i];
    console.log(colors[index]);
};


// Example (Array of Loop)

let names = ['param', 'hari', 'naveen'];

let length = names.length;

for (let s = 0; s < length; s++) {
    console.log(`${s} = ${names[s]}`)
};


// Example (Array of Object with Loop)

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

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    console.log(data[0].name);
};
// 26

let tol = 0;
for (let i = 0; i < data.length; i++) {
    tol += data[i].age;
}
console.log(tol);
// 102

let sum = 0;
for (let item of data) {
    sum += item.age;
};
console.log(sum);
// 102


// Example (Array of Object with Loop)

let gods = [
    {
        name: 'Jayapaul',
        weapon: 'Chakram'
    },
    {
        name: 'Yohan',
        weapon: 'Threeshoolam'
    },
    {
        name: 'Jesus',
        weapon: 'Brahmasthram'
    }
];

lt = gods.length - 1;

for (k = 0; k <= lt; k++) {
    console.log(`Lord ${gods[k].name}'s weapon is ${gods[k].weapon}.`);
};


// Odd and Even numbers 0 to 10

for (let i = 0; i <= 10; i++) {
    // const element = array[index];

    if (i === 0) {
        console.log(i + ' is even/odd ');
    }
    else if (i % 2 === 0) {
        console.log(i + ' is even ');
    }
    else {
        console.log(i + ' is odd ');
    }
};


// Example

for (let i = 0; i <= 5; i++) {
    console.log('Candiates', i);
    for (let index = 4; index > 0; index--) {
        console.log('   Data', index);
    };
};


// Example

let paints = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

let shirts = ['red', 'yellow', 'purple', 'indigo', 'white', 'blue'];

for (let i = 0; i <= 5; i++) {
    console.log(i + ' : ' + paints[i]);
    for (let index = 5; index >= 0; index--) {
        console.log("   " + index, shirts[index]);
    };
};


// Example

let lists = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

for (let index = 0; index < lists.length; index++) {
    let row = lists[index];
    console.log(row);
    for (i = 0; i < row.length; i++) {
        console.log(row[i]);
    };
};

let total = 0;
for (let a = 0; a < lists.length; a++) {
    let row = lists[a];
    for (b = 0; b < row.length; b++) {
        total += row[b];
    };
    console.log(total);
    // 230
};
console.log(total);
// 230

for (let a = 0; a < lists.length; a++) {
    let row = lists[a];
    let sum = 0;
    for (b = 0; b < row.length; b++) {
        sum += row[b];
    };
    console.log(`${row} is sum of ${sum}`);
};

for (let data of lists) {
    let sum = 0;
    for (add of data) {
        sum += add;
    };
    console.log(`${data} adding ${sum}`);
};


// Example

let name1 = ['param', 'hari', 'naveen', 'padhu'];
let name2 = ['s', 'v', 's', 's'];

for (i = 0; i <= 3; i++) {
    console.log(`${name1[i]}  ${name2[i]}`);
};