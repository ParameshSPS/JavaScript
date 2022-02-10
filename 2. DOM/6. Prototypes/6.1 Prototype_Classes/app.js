// Prototype Classes

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');


console.log(white.rgb());
console.log(white.hex());
console.log(white.rgba());
console.log(red.hex());
console.log(red.rgba());
console.log(red.rgba(0.6));
console.log(red.rgb());

document.body.style.backgroundColor = red.rgb();

document.body.style.backgroundColor = red.rgba(0.6);


// A Bit More Pratice With Classes

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    fulllySaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}
const red = new Color(255, 67, 89, 'tomato');

console.log(red.hsl());
console.log(red.opposite());
console.log(red.rgba(0.3));
// document.body.style.backgroundColor = red.hsl();
// document.body.style.backgroundColor = red.opposite();
// document.body.style.backgroundColor = red.fulllySaturated();

const white = new Color(255, 255, 255, 'white');

console.log(white);
console.log(white.calcHSL()); //undefined
console.log(white.hsl());

const orange = new Color(230, 126, 34, 'carrot');

console.log(orange.hsl());
// document.body.style.backgroundColor = orange.hsl();
console.log(orange.rgb());
// document.body.style.backgroundColor = orange.rgb();
console.log(orange.opposite());
// document.body.style.backgroundColor = orange.opposite();

setTimeout(function () {
    console.log('Background COlor changed to opposite');
    document.body.style.backgroundColor = red.opposite();
}, 2000)

setTimeout(function () {
    console.log('Background COlor changed to orange');
    document.body.style.backgroundColor = orange.rgb();
}, 4000)

setTimeout(function () {
    console.log('Background COlor changed to rgba');
    document.body.style.backgroundColor = orange.rgba(0.6);
}, 6000);


// Extends, Super and Sunclasses

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is Eating!`;
    }
    meow() {
        return 'meowwwww....';
    }
}

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is Bowwww!!`;
    }
    bark() {
        return 'Wooooof!!';
    }
}

const cat = new Cat('Scoopy', 4);
const dog = new Dog('Chinttu', 7);

console.log(cat.eat());
// console.log(cat.meow());
console.log(dog.eat());


// Example

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is Bowwww!!`;
    }
}

class Cat extends Pet {
    meow() {
        return 'meowwww';
    }
}

class Dog extends Pet {
    bark() {
        return 'woooof';
    }
}

const cat = new Cat('Scoopy', 4);
const dog = new Dog('Chinttu', 7);

console.log(dog);
console.log(cat.meow());


// Example

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is Bowwww!!`;
    }
}

class Cat extends Pet {
    meow() {
        return 'meowwww';
    }
}

class Dog extends Pet {
    bark() {
        return 'woooof';
    }
    eat() {
        return `${this.name} scarfs his food`
    }
}

const cat = new Cat('Scoopy', 4);
const dog = new Dog('Chinttu', 7);

console.log(dog.eat());


// Super Example

class Pet {
    constructor(name, age) {
        console.log('In Pet Constructor');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is Bowwww!!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesleft = 9) {
        console.log('In Cat Constructor');
        super(name, age)
        this.livesleft = livesleft;
    }
    meow() {
        return 'meowwww';
    }
}

class Dog extends Pet {
    bark() {
        return 'woooof';
    }
    eat() {
        return `${this.name} scarfs his food`
    }
}

const monty = new Cat('Scoopy', 4);
const dog = new Dog('Chinttu', 7);

console.log(monty);

console.log('hey', dog);