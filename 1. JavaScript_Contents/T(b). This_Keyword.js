// This keyword 

function greet() {
    console.log('Hello Everyone!');
    console.log(this);
};

console.log(greet());
greet();


// Example

/*
var color = 'blue';

let anotherColor = 'green';

// window global scope
// var is added to windows global scope.
// let and const are not

console.log(window.color);  
// will output 'blue'

console.log(window.anotherColor);  
// will output 'green'
*/


// Example

const sayHi = function () {
    console.log(this);
};

sayHi();


// Example

const person = {
    first: 'Paramesh',
    last: 'Sidhanatham',
    nickName: 'Param',
    fullName() {
        const { first, last, nickName } = this;
        console.log(`${first} ${last} AKA ${nickName}`);
        // console.log(`${this.first} ${this.last} ${this.nickName}`); -----> Paramesh Sidhanatham Param
    }
};

console.log(person.fullName());
// Paramesh Sidhanatham AKA Param


// Example

const persons = {
    firstName: 'Hari',
    lastName: 'Krishna',
    nickName: 'H K',
    fullName() {
        const { firstName, lastName, nickName } = this;
        return firstName + ' ' + lastName + ' AKA ' + nickName;
        // return `${firstName} ${lastName} AKA ${nickName}`;

    },
    printBio() {
        // const fullName = this.fullName();
        // console.log(`${fullName} is a boy`);
        return this.fullName() + 'is a person.'
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAHAA`);
    }
};

console.log(persons.fullName());
console.log(persons.printBio());

// const printBio = person.printBio;
// console.log(printBio());

console.log(persons.laugh());


// Example

const annoyer = {
    phrases: ['literally', 'crazy', 'I can\'t even', 'Cholo', 'Hari', 'Roopesh', 'Harsha'],
    pickPhrase() {
        const { phrases } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase());
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log('Loop ended !!!!');
    }
}

// call annoyer start function in browser console
// annoyer.start();

console.log(annoyer.start());
console.log(annoyer.stop());