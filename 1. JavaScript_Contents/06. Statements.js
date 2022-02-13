// Statements

// if
// run code based on if condition is true
// if condition is flase not run code

if (1 === 1) {
    console.log('lone no 8');
    console.log("i am paramesh");
};
// true

if (3 == '3') {
    console.log('lone no 14');
    console.log("i am a boy");
};
// true


// Example

let rating = 3;

if (rating === 3) {
    console.log('line no 25');
    console.log("this is a car");
};
// true


// Example

let bats = 10;

if (bats === 10)
// bats === 10
// bats = 10
// bats <= 10
// bats >= 10
{
    console.log('line no 41');
    console.log("a b c d e f");
};
//true


//example

let num = 39;
// number is divided by some number result is zero -----> is not run code

if (num % 2 !== 0) {
    console.log('line no 53');
    console.log("39 is odd");
};
// true


// Else if

let ratting = 5;

if (ratting === 4) {
    console.log('line no 64');
    console.log("YOU ARE A HERO");
}
// flase

else if (ratting === 5) {
    console.log('line no 70');
    console.log("meets expectations");
};
// true


// Else if

let balls = 10;

if (balls === 9) {
    console.log('line no 81');
    console.log("YOU ARE A HERO");
}
// flase

else if (balls === 11) {
    console.log('line no 87');
    console.log("meets expectations");
}
// flase

else if (balls === 10) {
    console.log('line no 93');
    console.log("meets expectations");
};
// true


// Else

let shoes = 100;
// shoes = -100

if (shoes === 4) {
    console.log('line no 105');
    console.log("YOU ARE A HERO");
}
// flase

else if (shoes === 5) {
    console.log('line no 111');
    console.log("meets expectations");
}
// flase

else {
    console.log('line no 117');
    console.log("you are a kathi");
};
// true


// Else

let highScore = 5000;
let userScore = 4500;

if (userScore >= highScore) {
    console.log('line no 129');
    console.log(`congrats, you have the new highscore of ${userScore}`);
    highScore = userScore;
}
// flase

/* 
if (highScore >= userScore ) {
    console.log(`congrats, you have the new highscore of ${userScore}`);
    highScore = userScore; 
}
// true
*/

else {
    console.log('line no 144');
    console.log(`congrats paramesh, you have the new highscore of ${userScore}`);
};
// true