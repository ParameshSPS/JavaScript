// Prototype

String.prototype.yell = function () {
    console.log(this);
};

console.log('hello'.yell());


// Example 

String.prototype.yells = function () {
    console.log(this.toUpperCase());
};

console.log('Hi Hello How Are You'.yells());


// Example 

String.prototype.input = function () {
    return `OMG!!! ${this.toUpperCase()}!! Ahhhhhhhh!.`.toUpperCase();
};

console.log('my lovely friend'.input());


// Example

Array.prototype.pop = function () {
    return 'Sorry I Want That Element, I WIll Never Pop it off!'.toUpperCase();
};

console.log([2, 4, 5].pop());


// Example

Array.prototype.pops = function () {
    return 'Sorry I wan\'t that element. I will never pop it';
}

const arr = ['hi', 'bye', 'no'];

console.log(arr.pops());


// Factory functions

function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

console.log(hex(255, 100, 25));
// "#ff6419"
// "rgb(255, 100, 25)"


// Example

function rgb(r, g, b) {
    return `rgb(${r}, ${b}, ${g})`;
};

console.log(rgb(255, 100, 25)); //rgb(255, 25, 100)


// Example

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    return color;
};

console.log(makeColor(45, 100, 250));
// {r: 45, g: 100, b: 250}


// Example

function makeColors(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    return color;
}

const firstColor = makeColors(35, 255, 150);

console.log(firstColor.rgb()); //rgb(35, 255, 150)


// Example

function makeInColors(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return (
            `rgb(${r}, ${g}, ${b})`
        );
    };
    color.hex = function () {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
}

const firstColors = makeInColors(35, 255, 150);

console.log(firstColors.rgb()); // rgb(35, 255, 150)
console.log(firstColors.hex()); // #23ff96

firstColors.r = 250;

console.log(firstColors.rgb()); // rgb(250, 255, 150)


// Constructor Functions

// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return an object.

function Colors(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
}

Colors.prototype.rgb = function () {
    const { red, green, blue } = this;
    return (
        `rgb(${red}, ${green}, ${blue})`
    );
};

Colors.prototype.hex = function () {
    const { red, green, blue } = this;
    return (
        '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
    );
};

Colors.prototype.rgba = function (a = 1.0) {
    const { red, green, blue } = this;
    return `rgba(${red}, ${green}, ${blue}, ${a})`;
}

const colors1 = new Colors(40, 255, 60);
const colors2 = new Colors(0, 0, 0);

console.log(colors1);
console.log(colors2);

console.log(colors1.rgb()); // rgb(40, 255, 60)
console.log(colors1.hex()); // #28ff3c
console.log(colors2.hex()); // #000000

document.body.style.backgroundColor = colors1.rgb();

document.body.style.backgroundColor = colors1.rgba();

document.body.style.backgroundColor = colors1.rgba(0.4);

document.body.style.backgroundColor = colors1.rgba(0.8);