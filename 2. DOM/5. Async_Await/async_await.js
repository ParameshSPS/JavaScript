// Async and Await

function getData() {
    const data = axios.get('https://swapi.dev/api/planets/');
    console.log(data);
}
getData();


// Async keyword
// Async function always return a promise

function greetings() {
    console.log('Hi!');
};

greetings();

function greet() {
    return 'Hello';
}

console.log(greet());

async function greets() {
    return 'Hello Paramesh';
}

console.log(greets());

// Example

function greet() {
    return "Hello World";
}

async function greetAsync() {
    return 'Helo World !!!';
}

greetAsync()
    .then((val) => {
        console.log("promise recolved !!!", val);
    })


// Example

async function hellos() {
    return 'hey guy!';
};

console.log(hellos());
// promise {<resolved>: 'hey guy!}

async function hello() {
    throw new Error('hey hero!');
};

console.log(hello());
// promise {<rejected>: Error: 'hey guy!}


// Example

function add(x, y) {
    return x + y;
};

console.log(add(4, 4));

async function adding(x, y) {
    return x + y;
};

console.log(adding(4, 4));


// Example

/*
async function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be numbers!!';
    }
    return x + y;
}
*/

function add(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            reject('X and Y must be numbers!!');
        }
        resolve(x + y);
    });
}
add(4, 10)
    // add('s', 'p')
    .then((val) => {
        console.log("Promise Resolved With: ", val);
    })
    .catch((err) => {
        console.log("Promise Rejected With: ", err);
    });


// Await keyword
// We can only use the await heyword inside of functions declare with async.

/*
function getPlanets() {
    return axios.get('https://swapi.dev/api/planets/');
}

getPlanets()
    .then((res) => {
        console.log(res.data);
    });
*/

// Function getPlanetsAwait() {
async function getPlanetsAwait() {
    // console.log('await ex: ', val);
    const res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data);
}
// getPlanetsAwait();
getPlanetsAwait()
    .catch((err) => {
        console.log('error catched: ', err);
    });


// Errors handling in async functions

function getPlanets() {
    return axios.get('https://swapi.dev/api/plasbhdgnets/');
}

getPlanets()
    .then((res) => {
        console.log(res.data);
    });


// ONE OPTION FOR ERROR HANDLING....

async function getPlanets() {
    //Invalid URL...
    const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
    console.log(res.data);
}

getPlanets().catch((err) => {
    console.log('IN CATCH!!!');
    console.log(err);
});


// ANOTHER OPTION....

async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
        console.log(res.data);
    } catch (e) {
        console.log('IN CATCH!', e);
    }
}

getPlanets();


// Multiple Await

const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            // setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const currRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (currRight + amount > bodyBoundary) {
                reject({ bodyBoundary, currRight, amount });
            }
            else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    });
};

/*
moveX(btn, 200, 1000)
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .catch(({bodyBoundary, amount, currRight}) => {
        console.log(`Body is ${bodyBoundary}px wide.`);
        console.log(`Element is at ${currRight}px, ${amount}px is too large`);
    });
*/

const btn = document.querySelector('button');

async function animateRight(el) {
    await moveX(el, 100, 1000);
    await moveX(el, 100, 1000);
    await moveX(el, 100, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 100, 1000);
    await moveX(el, 100, 1000);
    await moveX(el, 100, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
    await moveX(el, 200, 1000);
}
animateRight(btn)
    .catch((err) => {
        console.log('All Done');
    });

const btns = document.querySelector('button');

async function animateRight(el, amt) {
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
}

animateRight(btns, 100)
    .catch((err) => {
        console.log('All Done');
        animateRight(btns, -100);
    });