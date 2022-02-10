// Functions

function greetings() {
    console.log('Hi!');
};

greetings();


// Example

function data() {
    console.log('line no 13');
    console.log('My name is paramesh');
    console.log('My friend name is gopal');
    console.log('My brother name is hari');
    console.log('My another brother name is naveen');
};

data();

for (i = 0; i <= 4; i++) {
    data();
};


// Dice roll function

function rolldie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
};

function throwdie(times) {
    for (let i = 0; i < times; i++) {
        rolldie();
    };
};

throwdie(4);


// We can also write functions that accept inputs, called arguments

// Example

function greeting(data) {
    console.log(`Hi, ${data}`);
};

greeting('Brother');
// Hi, Brother


// Example

function greets(names) {
    console.log(`Hi ${names}`);
};

greets(['Param', 'Hari']);
// Hi, param,Hari


// Example

function greet(item) {
    for (let i = 0; i <= 1; i++) {
        let element = item[i];
        console.log(`Hi ${element}`);
    };
};

let item = ['Param', 'Hari'];

greet(item);
// greet(['Param', 'Hari']);


// Example

function concatKeyAndName(key, name) {
    return key + '_' + name
};

let test = concatKeyAndName(77, 'Hari');

console.log(test);
// 77_hari


// Avg Example

function average() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    };

    return sum / arguments.length;
};

console.log(average(20, 25));
// 22.5


// Example

function avg(x, y) {
    console.log(`Avg : ${((x + y) / 2)}`);
    // console.log(((x + y) / 2));
};

avg(20, 25);
// 22.5


// Example

function avgNumber(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem
    };

    return sum / arr.length
};

console.log(avgNumber([2, 5, 7, 9, 24, 54, 98]));

/*
function average() {
    var length = arguments.length;
    var sum = 0;
    
    for(var i=0; i<length; i++) {
      sum = sum + arguments[i];
    };
    
    return sum/length;
  };
  
  console.log(average(3,2,5,6)); //4
*/


// Multipe arguments

function square(num) {
    console.log(num * num); 
};
// +, -, / 

square(4); 
// 16


// Example with return 

function add(x, y) {
    return x + y;
};

let sum = add(10, 5);

console.log(sum); 
// 15


// Example with return

function paints(argu) {
    for (let color of argu) {
        if (color === 'purple' || color === 'green') {
            return true;
        };
    };
    return false;
};

color = ['blue', 'orange', 'green']

console.log(paints(color)); 
// true


// Password validation

/*
function isValidPassword(password, username) {
    if (password.length < 8) {
        return 'Password must be atleast 8 characters long';
    } else if(password.includes(' ')) {
        return 'Password must cannot contain spaces';
    } else if (password.includes(username)) {
        return 'Password must cannot contain username';
    } else {
        return true;
    };

    if (password.length < 8) {
        return 'Password must be atleast 8 characters long';
    }
    if(password.indexOf(' ') !== -1) {
        return 'Password must cannot contain spaces';
    }
    if (password.indexOf(username) !== -1) {
        return 'Password must cannot contain username';
    };

    return 'Password is valid';
}

function isValidPassword(password, username) {
    if (password.length < 8) {
    return false; 
    };
    if (password.indexOf(' ') !== -1) {
    return false; 
    };
    if (password.indexOf(username) !== -1) {
    return false; 
    };
    return true;
};

function isValidPassword(password, username) {
    if (password.length < 8 || 
        password.indexOf(' ') !== -1 || 
        password.indexOf(username) !== -1) 
    {
    return false;
    };
    return true;
};

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSmililar = password.indexOf(username) !== -1;
    if (tooShort || hasSpace || tooSmililar)
    return false;
    return true;
    /*if (!tooShort && !hasSpace && !tooSmililar)
    return true;
    return false;
}; 
*/

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSmililar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSmililar;
};

let result = isValidPassword('paramwar4', 'marap');

console.log('line no 260');
console.log(result); 
// true || false


// Pangram

/*
function isPangram(sentence) {

    let letters = 'abcdefghijklmnopqrstuvwxyz';

    let lowercase = sentence.toLowerCase()

    for (let i = 0; i < 26; i++) {
        if (lowercase.indexOf(letters[i]) === -1) {
            return false;
        }
    }
    return true;
};

function isPangram(sentence) {

    let lowercase = sentence.toLowerCase()

    for (let char of 'abcdefghijklmnopqrstuvwxyz' ) {
        if (lowercase.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
};
*/

function isPangram(sentence) {

    let lowercase = sentence.toLowerCase()

    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowercase.indexOf(char)) {
            return false;
        }
    }
    return true;
};

console.log('line no 307');
console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));


// Playing cards

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);

    return arr[idx];
};

function getCard() {
    const cardValues = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];

    const cardTypes = ['clubs', 'spades', 'hearts', 'diamonds'];

    return { value: pick(cardValues), suit: pick(cardTypes) };
};

console.log('line no 328');
console.log(getCard());


// Example

function Card() {
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const valIdx = Math.floor(Math.random() * values.length);
    const value = values[valIdx];

    const suits = ['clubs', 'spades', 'hearts', 'diamonds']
    const suitidx = Math.floor(Math.random() * suits.length);
    const suit = suits[suitidx];

    return { value: value, suit: suit }
};

console.log('lne no 347');
console.log(Card());