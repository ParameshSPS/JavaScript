// Objects

/*
property = key : value

property = {
    username : param,
    age : 23
}
*/

const userData = {
    userName: 'Paramesh',
    fatherName: 'Ramakrishana',
    motherName: 'Rajakumari',
    qualification: 'B.Tech',
    age: 23,
    location: 'Dharmavaram'
};

console.log('line no 21');
console.log(userData);

/* 
console.log(userData.age) ----> 23
console.log(userData.location) ----> Dharmavaram
*/


// Example

const test = {
    100: 'one hundered',
    10: 'ten'
};

console.log('line no 37');
console.log(test);

/*
console.log(test[100]) ----> one hundered
console.log(test['100'])
*/


// Example

const colors = {
    green: '#ebed4b',
    red: '$f9ca24',
    skyblue: '#30336b'
};

console.log('line no 54');
console.log(colors);
// console.log(colors.red) ----> '$f9ca24';


// Example

let d_color = 'voilet';

console.log('line no 63');
console.log(d_color);


// Adding property

const input = {
    age: 10
};

input.age -= 5
// input.age++
// input.age--
// input.age +=10

console.log('line no 78');
console.log(input);
// 5


// Nested arrays & objects

const student = {
    firstName: 'S Paramesh',
    lastName: 'Sidhanatham',
    strengths: ['Editing', 'Sports'],
    location: {
        street: ['30-804', 'Balaji Nagar'],
        town: 'Dharmavaram',
        city: 'Anantapur',
        state: 'A.P'
    },
    color: 'Gold',
    status: 'Single',
    study: 'B.Tech'
};

console.log('line no 100');
console.log(student.location.street[1]);
// Balaji Nagar

/*
console.log(student);
console.log(student.color); //gold
console.log(student.location.state); //a.p
console.log(student.location.street[0]); //30-804
*/

// Array of object

const students = [
    {
        name: 'S paramesh',
        age: 23,
        course: 'Civil',
        location: 'DMM'
    },
    {
        name: 'S Naveen',
        age: 23,
        course: 'ECE',
        location: 'TDP'
    },
    {
        name: 'V Hari Krishna',
        age: 23,
        course: 'Civil',
        location: 'DMM'
    }
];

console.log('line no 134');
console.log(students);


// Example

const game = {
    playerOne: {
        name: 'Gopal',
        playingAs: 'a'
    },
    playerTwo: {
        name: 'Neelima',
        playingAs: 'b'
    },
    board: [
        ['b', null, 'a'],
        ['a', 'b', 'a'],
        [null, 'b', 'a']
    ]
};

console.log('line no 156');
console.log(game);
// console.log(game.playerOne);


// Referance type

const pallete1 = {
    red: '#ebed4b',
    yellow: '$f9ca24',
    blue: '#30336b',
    purple: '#1234eb'
}

console.log('line no 170');
console.log(pallete1);


// Example

const pallete2 = pallete1;

pallete2.green = '#edfygc';
pallete2.voilet = '#edfygc';

console.log('line no 181');
console.log(pallete2);