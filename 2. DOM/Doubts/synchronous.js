// Synchronous basically means that you can only execute one thing at a time

console.log('Paramesh');
console.log('Hari Krishna');

calculate();

console.log('Naveen');
console.log('Gopal');
console.log('Padhu');
console.log('Neelima');
console.log('Bhanu');
console.log('Bunny');


function calculate() {
	let sum = 0;
	for (let i = 0; i < 10000000000; i++) {
		sum += i;
	}
	console.log('Math result ', sum);
}


// Sync practice

console.log('Paramesh');
console.log('Hari krishna');
console.log('Naveen');

// Paramesh
// Hari Krishna
// Naveen