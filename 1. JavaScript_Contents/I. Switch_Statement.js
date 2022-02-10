// switch statement

let day = 4;

if (day === 1) {
    console.log('line no 6');
    console.log('monday');
}

/* 
if (day === 2) {
    console.log('tuesday');}

if (day === 3) {
    console.log('wednesday');}

if (day === 4) {
    console.log('thursday');}

if (day === 5) {
    console.log('friday');}

if (day === 6) {
    console.log('saturday');}

if (day === 7) {
    console.log('sunday');}
*/

else if (day === 2) {
    console.log('line no 31');
    console.log('tuesday');
}

else if (day === 3) {
    console.log('line no 36');
    console.log('wednesday');
}

else if (day === 4) {
    console.log('line no 41');
    console.log('thursday');
}

else if (day === 5) {
    console.log('line no 46');
    console.log('friday');
}

else if (day === 6) {
    console.log('line no 51');
    console.log('saturday');
}

else if (day === 7) {
    console.log('line no 56');
    console.log('sunday');
}

else {
    console.log('line no 61');
    console.log('invalid day');
};


// Switch statement

let days = 4;

switch (days) {
    case 1:
        console.log('line no 72');
        console.log('MONDAY');

    case 2:
        console.log('line no 76');
        console.log('TUEDAY');

    case 3:
        console.log('line no 80');
        console.log('WEDNESDAY');

    case 4:
        console.log('line no 84');
        console.log('THURSDAY');

    case 5:
        console.log('line no 88');
        console.log('FRIDAY');

    case 6:
        console.log('line no 92');
        console.log('SATURDAY');
        break;

    case 7:
        console.log('line no 97');
        console.log('SUNDAY');

    default:
        console.log('line no 101');
        console.log('invalid days');
};


// Example

let emoji = 'sad face';

switch (emoji) {
    case 'happy face':
        console.log('line no 112');
        console.log('yellow');
        break;

    case 'sad face':
        console.log('line no 117');
        console.log('yellow');
        break;

    case 'eggplant':
        console.log('line no 122');
        console.log('white');
        break;

    case 'heart':
        console.log('line no 127');
        console.log('red');
        break;

    case 'lips':
        console.log('line no 132');
        console.log('red');
};


/*
let emoji = 'sad face'

switch (emoji) {

    case 'happy face':
    case 'sad face':
        console.log('yellow');
    break;

    case 'eggplant':
        console.log('white');
    break;

    case 'heart':
    case 'lips':
        console.log('red');
    break;
}
*/