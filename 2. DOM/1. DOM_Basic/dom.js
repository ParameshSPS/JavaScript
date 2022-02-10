// DOM Manpuation

// InnerText

const h1 = document.querySelector('h1');

console.log(h1.innerText);

h1.innerText = 'Web Development';
// Changed H1 Text

/*
const h1 = document.querySelectorAll('h1');

console.log(h1[0].innerText);

h1[0].innerText = 'Web Development'; ----------> Changed H1 Text
*/

// TextContent

console.log(h1.textContent);

h1.textContent = 'Front-End Developer';
// Changed twice


// Example

const p = document.querySelector('#main');

console.log(p.innerText);

console.log(p.textContent);


// InnerHTML

const form = document.querySelector('form');

console.log(form.innerHTML);

console.log(p.innerHTML);

h1.innerHTML += ' <b> Ltd </b>';

h1.innerHTML += ' <b> .... </b>';

h1.innerHTML += ' <b> !!! </b>';

p.innerHTML += '--------------';


// Example

const pTag = document.querySelector('p');

console.log(pTag.innerText);

pTag.innerText += '????';


//--------------------------------------------------- Values/Src/Href and More -------------------------------------------------//

// Values

const inputs = document.querySelectorAll('input');

console.log(inputs);

console.log(inputs[0].value);
console.log(inputs[1].value);
console.log(inputs[2].checked);

inputs[0].value += ' Sidhanatham';
inputs[2].checked += 'on';
inputs[1].placeholder = 'please enter password';
// inputs[3].value = '300';


// Href

const a = document.querySelector('a');

console.log(a.href);

a.href = 'http://www.W3Schools.com';


// Src

const img = document.querySelector('img');

console.log(img.src);

// img.src = '';


// Getting and Setting attributes

const range = document.querySelector('input[type="range"]');

console.log(range.getAttribute('max'));  // 500
console.log(range.getAttribute('min'));  // 100
console.log(range.getAttribute('type')); // range
console.log(range.getAttribute('step')); // 50

console.log(range.setAttribute('min', '-100'));
console.log(range.setAttribute('max', '100'));
console.log(range.setAttribute('step', '10'));
// console.log(range.setAttribute('type', 'radio')); 
console.log(range.setAttribute('value', '50'));


// Finding parent element

const firstLi = document.querySelector('li');

// ParentElement

console.log(firstLi.parentElement);                             // ul
console.log(firstLi.parentElement.parentElement);               // body
console.log(firstLi.parentElement.parentElement.parentElement); // html

// NextElementSibling

console.log(firstLi.nextElementSibling);                                        // <li>Second Thing</li>
console.log(firstLi);                                                           // <li class="special">First Thing</li>
console.log(firstLi.nextElementSibling.nextElementSibling);                     // <li class="special">Third Thing</li>
console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling);  // null

// PreviousElementSibling

const thirdLi = document.querySelector('li');

console.log(thirdLi);                        // <li class="special">Third Thing</li>
console.log(thirdLi.previousElementSibling); // <li>Second Thing</li> -----------------------------------

// ChildElementCount

const ul = document.querySelectorAll('ul');

console.log(ul.childElementCount);                 // 3 li children
// console.log(ul.childElementCount[0].innerText); // First Thing ---------------------------------------


// Changing multiple elements

const allLis = document.querySelectorAll('li');

for (let index = 0; index < allLis.length; index++) {
    console.log(allLis[index].innerText);
};

/*
for (let index = 0; index < allLis.length; index++) {
    allLis[index].innerText = 'WE ARE THE CAMPIONS!'; 
}

for (let li of allLis) {
    li.innerHTML = 'WE ARE <b>THE CHAPIONS</b>!'
}

for (let element of allLis) {
    element.style.color = 'red';
};
*/


// Style

const paraTag = document.querySelector('p');

console.log(paraTag.style.backgroundColor = 'black');
console.log(paraTag.style.color = 'red');
console.log(paraTag.style.fontSize = '20px');

/*
for (let element of allLis) {
    element.style.color = 'red';
};
*/

const allLi = document.querySelectorAll('li');
const colors = ['red', 'blue', 'orange', 'green', 'purple', 'red'];

allLi.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color;
})


// Get computed styles

const li = document.querySelector('li');

const style = getComputedStyle(li)

console.log(style);

// console.log(getComputedStyle(li));


// Manipulating classes

const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

todo.classList.toggle('done');    // add
// todo.classList.toggle('done'); // remove

/*
const todo = document.querySelector('#todos .todo');

// Setting styles one at a time is not ideal:

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%'


// We can use a class instead!
// In app.css I've defined a 'done' class that we can apply

// OPTION 1 - using setAttribute
// This adds the class 'done', but it overwrites any existing classes...

todo.setAttribute('class', 'done');      //font-size is changed

todo.setAttribute('class', 'todo done'); //font-size is normal

// OPTION 2 - classList
// We can use the classList property and it's methods to add,remove, and toggle classes!

todo.classList.add('done');

// to remove it

todo.classList.remove('done');

// to toggle:

todo.classList.toggle('done'); //add
todo.classList.toggle('done'); //remove
todo.classList.toggle('done'); //add
// todo.classList.toggle('done'); //remove
*/


// Creating elements
// Appendchild

const newh2 = document.createElement('h2');

newh2.innerHTML = '<b> I Like  Animals -------- Bear </b>';

newh2.classList.add('header');

const section = document.querySelector('section');

section.appendChild(newh2);

newh2.style.color = 'red';

// Img

const imgTag = document.createElement('img');

// https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80

imgTag.src = 'https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80';

imgTag.width = 300;
imgTag.height = 400;

section.appendChild(imgTag);
// document.body.appendChild(imgTag) ------> before end of the body

// Video 

const newLink = document.createElement('a');

newLink.innerText = 'SPS Creations Channel ---- Touch mee!';

newLink.href = 'https://www.youtube.com/channel/UCFL30_ethtuDSkl_MvKm86Q';

const secP = document.querySelector('#main');
// const secP = document.querySelector('p');

secP.appendChild(newLink)

// Example 1

const parentUl = document.querySelector('#todos');

const newLi = document.createElement('li');

newLi.innerText = 'I\'m added newly !!!';

newLi.classList.add('todo');

parentUl.appendChild(newLi);

// Example 2

const parentUls = document.querySelector('ul');

const newhLi = document.createElement('li');

newhLi.innerText = 'Fourth Thing';

newhLi.classList.add('special');

parentUls.appendChild(newhLi);

// Example 3

const parentsUl = document.querySelector('ul');

const newLis = document.createElement('li');

newLis.innerText = 'Things';

newLis.classList.add('special');

const firstList = document.querySelector('li.special');

parentsUl.insertBefore(newLis, firstList);

// Example 4

const ulTag = document.querySelector('#todos');

const liTag = document.createElement('li');

liTag.innerText = 'I\'m added onemore Newly !!!';

liTag.classList.add('todo');

ulTag.appendChild(liTag); //------------> end of the list

const liTags = document.querySelector('li.todo');

ulTag.insertBefore(liTag, liTags); //-----------> move to top of the list

const liOfTag = document.querySelectorAll('li.todo')[3];

ulTag.insertBefore(liTag, liOfTag);

// Example 5

const element = document.createElement('h2');

element.innerHTML = '<b>There are classified into 4 Categories:- </b>';

element.classList.add('header');


const elements = document.querySelector('p.special');

elements.appendChild(element);

element.style.color = 'purple';
element.style.textDecoration = 'underLine';

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

const i = document.createElement('i');

i.innerText = 'I\'m a full-stack Developer';

const firstP = document.querySelector('p');

firstP.insertAdjacentElement('beforebegin', i)
// firstP.insertAdjacentElement('afterbegin', i)
// firstP.insertAdjacentElement('beforeend', i)
// firstP.insertAdjacentElement('afterend', i)

i.style.color = 'blue';
i.style.fontSize = '20px';


// Append prepend

const theParent = document.querySelector("#main");

const theKid = document.createElement("p");

theKid.innerText = 'Are we there yet?';

// append theKid to the end of theParent
theParent.prepend(theKid);
theParent.append(theKid);


// Remove, RemoveChild

const spUl = document.querySelector('section ul');

console.log(spUl);

const spLi = spUl.querySelector('.special');

spUl.removeChild(spLi);

// h1.remove();