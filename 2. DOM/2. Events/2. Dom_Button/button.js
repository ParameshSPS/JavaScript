// The impossible button demo

/*
const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
    console.log("You Hovered Me !!");
    btn.style.left = '200px';
    btn.style.top = '100px';
});
*/

// Example

const btns = document.querySelector('button');

btns.addEventListener('mouseover', function () {
    console.log("You Hovered Me !!");
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btns.style.top = `${height}px`;
    btns.style.left = `${width}px`;
});

btns.addEventListener('click', function () {
    btns.innerText = 'You Got Me !!';
    document.body.style.backgroundColor = 'purple';
});