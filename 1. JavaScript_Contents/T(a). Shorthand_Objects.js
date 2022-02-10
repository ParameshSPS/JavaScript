//short Hand Obejts

const review = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const max = Math.max(...review);
const min = Math.min(...review);
const sum = review.reduce((sum, rev) => sum + rev);
const avg = sum / review.length;

const stats = {max, min, sum, avg};

console.log(stats);


//xample
const getstats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, rev) => sum + rev);
    const avg = sum / arr.length;
    return {
        // max : max,
        // min : min,
        // sum : sum,
        // avg : avg
        max,
        min,
        sum,
        avg
    };
};

const reviews = [8.9, 5.0, 9.0, 5.5, 7.5, 4.0, 3.5, 6.7];

const statss = getstats(reviews)

console.log(statss);


//xample ---------> functions.js
function pick(arr) {
    
    const idx = Math.floor(Math.random() * arr.length);

    return arr[idx];
}

function getCard() {

    const values = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'
    ];

    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const value = pick(values);
    const suit = pick(suits)

    return {
        value: value, 
        suit: suit
    };    
};

console.log(getCard());


// Computed properties
const user = 'Paramesh';

const userRole = {
    [user] : 'Admin'
};

console.log(userRole); //{ Paramesh: 'Admin' }


//xample
const role = 'host';
const person = 'Jools holland';
const role2 = 'director';
const person2 = 'James Cameron';

// const team = {};
// team[role] = person;
// team[role2] = person2;
const team = {
    [role]: person, //host: 'Jools holland';
    //role: person, -------->  role: 'Jools holland';
    [role2]: person2
};

console.log(team);  


//xample
const addProp = (obj, k, v) => ({...obj, [k]: v});
/*
//same as 1
function addProp(obj, k, v) {
    const copy = {
        ...obj
    };
    copy[k] = v;
    return copy;
};

//same as 2
const addProp = (obj, k, v) => {
    return {
        ...obj, 
        [k]: v
    };
};
*/
console.log(addProp(team, 'happy', '(:'));


//methods in objects

const math = {
    add: function (x, y) {
        return x + y;
    },
    multi: function (x, y) {
        return x * y;
    },
    div: function (x, y) {
        return x / y;
    },
    square: function (x, y) {
        return x * y;
    },
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
};
/*
const math = {
    add: (x, y) => x + y,
    multi: (x, y) => x * y,
    div: (x, y) => x / y,
    square:(x, y) => x * y
};
*/
console.log(math.add(10, 10)); //20
console.log(math.square(10, 10)); //100
console.log(math.numbers); //100

// console.log(math);


//xample
const maths = {
    userName: 'TommyBot',
    add: (x, y) => x + y,
    multi: (x, y) => x * y,
};

console.log(maths.add(10, 20)); //30


//xample    
const auth = {
    username: 'Wheel of The Time',
    login() {
        console.log('Logged you in!');
    },
    logout() {
        console.log('goodBye');
    }
}

console.log(auth);