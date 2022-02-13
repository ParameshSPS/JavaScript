// Nesting conditonals

let password = "Hello Moto";

if (password.length >= 6) {
    if (password.indexOf(' ') === -1)
    // if (password.indexOf(' ') === -1) --->  space remove of password
    {
        console.log('line no 9');
        console.log('valid password');
    }
    else {
        console.log('line no 13');
        console.log('password is longer engough, but cannot contain space');
    }
}

else {
    console.log('line no 19');
    console.log('password must be longer');
};


// Logicals

// AND(&&), OR(||), NOT(!)

// "Both sides(left and right) must be true in order for the whole thing to be true"

// AND(&&)

let logInpassword = "taco sunday";

if (logInpassword.length >= 6 && logInpassword.indexOf(' ') === -1) {
    console.log('line no 35');
    console.log('valid password');
}

else {
    console.log('line no 40');
    console.log('invalid password');
};


// Example

let num = 5;
// num = 1 -----> invalid

if (num >= 3 && num <= 10) {
    console.log('line no 51');
    console.log('valid');
}

else {
    console.log('line no 56');
    console.log('invalid');
};


// OR(||)

// Only one side(light or right) needs to be true

let salary = 10;
// salary = 8 --------> salary out

if (salary < 6 || salary >= 9.5) {
    console.log('line no 69');
    console.log('salary');
}
// salary

else {
    console.log('line no 75');
    console.log('salary out');
};


// Example

let color = 'purple';

if (color === 'red' || color === 'yellow' || color === 'purple') {
    //color = 'white' -----> colorless
    console.log('line no 86');
    console.log('color');
}

else {
    console.log('line no 91');
    console.log('colorless');
};


// NOT(!)

let flover = 'blue';

if (flover !== 'red' && flover !== 'green')
// if (!(flover === 'red' && flover === 'green'))
{
    console.log('lne no 103');
    console.log(flover);
}
// blue

let login;
// login = ''; -----> run
// login = '1234'; ------> not run

if (!login) {
    console.log('line no 113');
    console.log('login');
};