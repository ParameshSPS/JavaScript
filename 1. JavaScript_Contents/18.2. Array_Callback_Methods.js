// Array Callback Methods

// Foreach Method

let number = [10, 20, 30, 40, 50];

number.forEach(function (num) {
    console.log(num);
});


// Foreach Example

let numbering = [10, 20, 30, 40, 50];

numbering.forEach(function (nums, index) {
    console.log(index, nums);
});


// Foreach Example

let num = [10, 20, 30, 40, 50]

num.forEach(function (number) {
    let a = ((number / 2) * 2)
    // a = (number * 2)
    // a = (number + 2)
    // a = (number * 4)
    // a = (number / number)
    console.log(a);
});


// Foreach Example

let numbers = [10, 20, 30, 40, 50]

function printtriple(n) {
    console.log(n * 3);
};

numbers.forEach(printtriple);


// Foreach Example

let movies = [{
    title: 'Adugoooo Vade King',
    authour: ['Paramesh', 'Hari Krishna'],
    rating: 4.9
},
{
    title: 'Kadhi',
    authour: ['Krishna'],
    rating: 4.8
},
{
    title: 'Kabali 150',
    authour: 'Hari Krishna',
    rating: 4.9
},
{
    title: 'Pedhanna',
    authour: "'Paramesh', 'Hari Krishna'",
    rating: 4.9
}
];

movies.forEach(function (movie) {
    console.log(movie);
    // console.log(movie.authour);
});

for (let index = 0; index < movies.length; index++) {
    console.log(index, movies[index]);
    console.log(index, movies[index].authour);
    console.log(index, movies[1].rating); //4.8
};

for (let book of movies) {
    console.log(book);
};

console.log(movies[0].title.toUpperCase());
// ADUGOOOO VADE KING


// Example of map 

const tittles = movies.map(function (t) {
    return t.title.toUpperCase();
});

console.log(tittles);


// Map
// Creates a new array with the results of calling a callback on every element in the array

const text = ['param', 'hari', 'naveen', 'padhu'];

const texting = text.map(function (t) {
    return t.toUpperCase();
});

console.log(texting);


// Example

let words = ['param', 'hari', 'naveen', 'padhu'];

/*
words.map(function (word) {
    console.log(word.toUpperCase().split('').join('.'));
})
*/

let abbrevs = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
});

console.log(abbrevs);


// Example

let nbr = [10, 20, 30, 40, 50, 60];

let nbrs = nbr.map(function (n) {
    return n * 2;
});

console.log(nbrs);


// Example

const doubles2 = [];

for (let nbrs of nbr) {
    doubles2.push(nbrs * 2)
};

console.log(doubles2);


// Example

let nbrss = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let nbrsDetail = nbrss.map(function (nu) {
    return {
        value: nu,
        isEven: (nu % 2 === 0)
    };
});

console.log(nbrsDetail);


// Find
let data = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
];

let datas = data.find(datas => {
    return datas.includes('Mrs.')
    // Mr. and Mrs. Smith
    // return datas.includes('Mr.') 
    // The Fantastic Mr. Fox
});

console.log(datas);

let datas1 = data.find(d => (
    d.indexOf('Mr.') === 0
));
// Mr. and Mrs. Smith

// let datass = data.find(d => d.indexOf('Mrs.') === 0); 
// Mrs. Doubtfire

console.log(datas1);


// Example

let books = [{
    title: 'Adugoooo Vade King',
    authour: ['Paramesh', 'Hari Krishna'],
    rating: 4.25
},
{
    title: 'Kadhi',
    authour: ['Krishna'],
    rating: 4.42
},
{
    title: 'Kabali 150',
    authour: 'Hari Krishna',
    rating: 4.11
},
{
    title: 'Pedhanna',
    authour: "'Paramesh', 'Hari Krishna'",
    rating: 4.36
}
];

let goodBook = books.find(b => b.rating >= 4.3);

console.log(goodBook);

let goodBook1 = books.find(b => b.authour.indexOf('Hari Krishna') === 0);
let goodBook2 = books.find(b => b.authour.includes('Hari Krishna'));

console.log(goodBook1);
console.log(goodBook2);


// Filter

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a1 = a.filter(n => {
    return n % 2 === 1;
    //return n % 2 === 0; -----> [ 2, 4, 6, 8, 10 ]
    // let a1 = a.filter(n => n % 2 === 0);
});

console.log(a1);
// [ 1, 3, 5, 7, 9 ]

let a2 = a.filter(n => n < 5);
let a3 = a.filter(n => n > 5);

console.log(a2);
// [ 1, 2, 3, 4 ]

console.log(a3);
// [ 6, 7, 8, 9, 10 ]


// Example

const iteming = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
},
{
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
},
{
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
},
{
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
},
{
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
}
];

let itemss = iteming.filter(i => i.rating > 4.3);
console.log(itemss);

let item11 = iteming.filter(b => b.genres.includes('fantasy'));
console.log(item11);

let shortForms = iteming.filter(b => b.genres.includes('short stories') ||
    b.genres.includes('essays')
);

console.log(shortForms);

// Simple search functionality:
const quary = 'The';
const result = iteming.filter(b => {
    const title = b.title.toLowerCase();
    return title.includes(quary.toLowerCase())
});
console.log(result);


// Every
// Every is a testing like boolean values

const wording = ['dog', 'dig', 'log', 'bag', 'wag'];

const words1 = wording.every(word => {
    return word.length === 3;
});

console.log(words1);
// true

let words2 = wording.every(wrd => wrd[0] === 'd');
console.log(words2);//false

let words3 = wording.every(w => {
    let last_letter = w[w.length - 1];
    // let last_letter = w.length - 1;
    return last_letter === 'g';
    // return w[last_letter] === 'g';
});

console.log(words3);
// true  

let words7 = iteming.every(book => book.rating < 3.5);
// let words7 = iteming.every(book => book.rating > 3.5); ---> true
console.log('322');
console.log(words7);
// false


// Some

const wordings = ['dog', 'jello', 'log', 'cup cake', 'wag', 'bag'];

let words4 = wordings.some(wrd => {
    return wrd.length > 4;
    //let words4 = wordings.some(wrd => wrd.length > 4);
});

console.log(words4);
// true

let words5 = wordings.some(wrd => wrd[0] === 'z');
// let words5 = wording.some(wrd => wrd[0] === 'd'); ----> true
console.log(words5);
// false

let words6 = wordings.some(wrds => wrds.includes('cake'));
console.log(words6);
// true

let words8 = iteming.some(book => book.authors.length === 2);
console.log(words8);
// true


// Sort

let prices = [500.50, 4000, 99.99, 35.99, 12.00, 9500];

let prices1 = prices.sort();
console.log(prices1);
// [ 12, 35.99, 4000, 500.5, 9500, 99.99 ]

let ascSort = prices.sort((a, b) => a - b);
console.log(ascSort);
// [ 12, 35.99, 99.99, 500.5, 4000, 9500 ]

let descSort = prices.sort((a, b) => b - a);
console.log(descSort);
// [ 9500, 4000, 500.5, 99.99, 35.99, 12 ]

let booksSort = iteming.sort((a, b) => a.rating - b.rating)
let booksSort1 = iteming.sort((a, b) => b.rating - a.rating)

console.log(booksSort);
console.log(booksSort1);


// Reduce

const no = [3, 5, 7, 9, 11];

const product = no.reduce((total, currentvalue) => {
    return total * currentvalue; //sames +, -, /
});

console.log(product);
// 3*5*7*9*11 = 10395;

/*
callback        accumalator        currentvalue        total
    
firstcall           3                    5               15
secondcall          15                   7               105
thirdcall           105                  9               945
fourthcall          945                  11              10395
*/


// Example

let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topscore = grades.reduce((max, currval) => {
    if (currval > max) return currval;
    return max;
});

console.log(topscore);
// 99

const topscore1 = grades.reduce((max, currval) => {
    return Math.max(max, currval);
});

console.log(topscore1);
// 99

const topscore2 = grades.reduce((min, currval) => (
    Math.min(min, currval)
));

console.log(topscore2);
// 58

/*
max        currval        return
    
89          96              96
96          58              96
96          77              96
96          62              96
96          93              96
96          81              96
96          99              99
99          73              99          
*/


// Example 

let sum = [4, 5, 6, 7, 8].reduce((accumulator, currval) => {
    return accumulator + currval;
});

console.log(sum);
// 30

let sum1 = [4, 5, 6, 7, 8].reduce((accumulator, currval) => {
    return accumulator + currval;
}, 100);

console.log(sum1);
// 130

let sum3 = [10, 20, 30, 40, 50].reduce((sum, currval) => {
    return sum + currval;
}, 1000);

console.log(sum3);
// 1150


// Example

const votes = ['p', 's', 'p', 's', 's', 'p', 's', 's', 'p', 's', 'p'];

const result1 = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++
    } else {
        tally[val] = 1;
    }
    return tally;
}, {});

console.log(result1);
// { p: 5, s: 6}

const result2 = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});

console.log(result2);
// { p: 5, s: 6}


// Example

const iteming1 = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
},
{
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
},
{
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 2.19,
    genres: ['fiction', 'short stories']
},
{
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 2.65,
    genres: ['fantasy', 'epic']
},
{
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
}
];

const groupedByrating = iteming1.reduce((groupedBooks, iteming1) => {
    const key = Math.floor(iteming1.rating);
    if (!groupedBooks[key]) (groupedBooks[key]) = [];
    groupedBooks[key].push(iteming1);
    return groupedBooks;
}, {});

console.log(groupedByrating);