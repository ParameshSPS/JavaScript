// Booleans

let isAngry = 12; // Number

isAngry = false; // Boolean

isAngry = 123456789; // Back to number

console.log('line no 9');
console.log(isAngry);
// 123456789


// Booleans

let login = 456

// login = true; // Boolean

console.log('line no 20');
console.log(login);
// 456


// Booleans

let numDonuts = 1234;

numDonuts = false; // Boolean

numDonuts = 56789;

console.log('line no 33');
console.log(numDonuts);
// 56789


// Strings

let text = "My name is 'Paramesh' " // String

console.log('line no 42');
console.log(text);
// My name is 'Paramesh' or "Paramesh"


// Length

let msg = 'zxcv';

length = msg.length; // Characters

console.log('line no 53');
console.log(msg.length);
// 4


// Methods

let A = "paramesh is a boy";

A = A.toUpperCase(); // String method

console.log('line no 64');
console.log(A);
// PARAMESH IS A BOY


// Methods

let B = "she is a girl";

B = B.toLocaleUpperCase();

console.log('line no 75');
console.log(B);
// SHE IS A GIRL


// Methods

let C = "SHE IS A 'GIRL'";

C = C.toLocaleLowerCase();

console.log('line no 86');
console.log(C);
// she is a girl


// Methods

let D = 'She iS A BeAutiFUL';

D = D.toLowerCase();

console.log('line no 97');
console.log(D);
// she is a beautiful


// Methods

let E = 'He iS A BeAutiFUL';

E = E;
// The value in E is unchanged

console.log('line no 109');
console.log(E);
// He iS A BeAutiFUL


// Methods

let greeting = '    leave me alone pls    ';

greeting = greeting.trim();

console.log('line no 120');
console.log(greeting);
// leave me alone pls


// More string methods

let sport = "baseBall";

baseBall = "baseBall".indexOf("all");

// baseBall = "baseBall".indexOf("ball") = 4
// baseBall = "baseBall".indexOf("all") = 5

/*
b = 0
a = 1
s = 2
e = 3
B = 4
a = 5
l = 6 
*/

console.log('line no 144');
console.log(baseBall);
// 5


// Slice

let game = "superwomenoftheday"

game = game.slice(0, 5);
// game = game.slice(beginIndex,endIndex)

console.log('line no 156');
console.log(game);
// super


// Slice

let base = "superwomenoftheday";

base = base.slice(5, 10);
// base = base.slice(beginIndex,endIndex)

console.log('line no 168');
console.log(base);
// women


// Slice

let it = "super women of the day";

it = it.slice(6);
// it = it.slice(beginIndex,endIndex)

console.log('line no 180');
console.log(it);
// women of the day


// Replace

let ball = "gopal is a boy";

ball = ball.replace('boy', 'girl');
// boy replace girl

console.log('line no 192');
console.log(ball);
// gopal is a girl


// Quiz

const age = "5" + "4";

console.log('line no 201');
console.log(age);
// 54


// Quiz

let word = "pecan pie";

word = word.slice(7);

console.log('line no 212');
console.log(word);
// ie


// Quiz

let god = "pecanpie";

pecanpie = "pecanpie".indexOf("i");

console.log('line no 223');
console.log(pecanpie);
// 6


// String escape

let names = "paramesh\nsidhanatham"
// \n is new line

console.log('line no 233');
console.log(names);


// String escapes

let X = 'he said i ain\'t happy';

console.log('line no 241');
console.log(X);
// he said i ain't happy


// String escapes

let Y = "he said i am a \"happy\"";

console.log('line no 250');
console.log(Y);
// he said i am a "happy"

// String escape

let Z = "\t haaa";

console.log('line no 258');
console.log(Z);
//  haaa


// Template literals

let count = `${1 + 6}`;

console.log('line no 267');
console.log(count);
// 7


// Template literals

let num = `we own the ${100 + 8} of the match`;

console.log('line no 276');
console.log(num);
// we own the 108 of the match


// Template literals

let animal = "pig";

let sound = "oink";

text = `${animal} says ${sound}!`;
// `${animal} says ${sound}!`
// animal + " says " + sound + "!"
// animal + says + sound + !

console.log('line no 292');
console.log(text);
// pig says oink!


// Quiz

let username = "param";

username = `welcome back, ${username}`;
// username = `WELCOME BACK, ${username.touppercase()}`

console.log('line no 304');
console.log(username);
// welcome back, param


// Quiz

let item = "bananas";

let price = 10;

let quantity = 4;

message = `you bought ${quantity} ${item}, total price: $${price * quantity}`;

console.log('line no 319');
console.log(message);
// you bought 4 bananas, total price: $40


// Null

let firstName = "null";
// No one is logged in yet
// Value is explicitly nothing

console.log('line no 330');
console.log(firstName);
// null


// Null 

let firstname = "paramesh";
// a user logged in

console.log('line no 340');
console.log(firstname);
// paramesh


// Undefined

/* 
value is param, but assigend is 5
p = 0
a = 1           // same as things also firstname ----> FirstName = undefined //
r = 2
a = 3
m = 4
undefined 
*/


// Math object

/* 
math.pi
math.round (10.9999) = 11
math.abs (-1050) = 1050
math.floor (4.99) = 4
math.power (10,2) = 100
*/

let O = Math.PI;

console.log('line no 370');
console.log(O);
// 3.141592653589793


// Math.round()

let Pi = 4.4;

Pi = Math.round(4.4);

// console.log(Math.round(4.9)) = 5
// console.log(Math.round(4.4)) = 4

console.log('line no 384');
console.log(Pi);
// 4


// Math.floor

let pi = 4.9;

pi = Math.floor(4.9);

// console.log(Math.floor(4.9))

console.log('line no 397');
console.log(pi);
// 4


// Math.pow

let ci = (4, 2);

ci = Math.pow(4, 2);

// console.log(Math.pow(4,2))

console.log('line no 410');
console.log(ci);
// 16


// Math.abs

let di = -5.2;

di = Math.abs(-5.2);

// console.log(Math.abs(-5.2))

console.log('line no 423');
console.log(di);
// 5.2

// Random Number

let s = Math.random();

console.log('line no 431');
console.log(s);
// 0.09504699697722097


// Random Number

let step1 = Math.random();
// let step1 = Math.random()

let step2 = Math.random() * 10;
// let step2 = step1 * 10

let step3 = Math.floor(Math.random() * 10);
// let step3 = Math.floor(step2)

let step4 = (Math.floor(Math.random() * 10) + 1);
// let randomNumber = step3 + 1

// console.log(randomNumber)

console.log('line no 452');
console.log(Math.floor(Math.random() * 10) + 1);
// 4


// ParseInt & ParseFloat

let q = parseInt(99)

console.log('line no 461')
console.log(q);
// 99

console.log('line no 465')
console.log(parseInt('104'));
// 104

console.log('line no 469')
console.log(parseFloat('56.23545'));
// 56.23545

console.log('line no 473')
console.log(parseInt('916006abcd'));
// 916006

console.log('line no 477')
console.log(parseFloat('66.1526efgh'));
// 66.1526

console.log('line no 481')
console.log(parseInt('dhshbvcxjx 108 vijfnv'));
// NaN