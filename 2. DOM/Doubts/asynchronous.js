/* Asynchronous means that you can execute multiple things at a 
time and you don't have to finish executing the current thing in order to 
move on to next one*/

console.log('Paramesh');
setTimeout(() => {
	console.log('Hari Krishna');
}, 1000);

console.log('Naveen');
// Paramesh
// Naveen 

//--------------> time 1sec

// Hari Krishna


// Practice

console.log('Paramesh');
console.log('Hari Krishna');

setTimeout(() => {
	calculate();
}, 2000);

console.log('Naveen');
console.log('Gopal');
console.log('Padhu');
console.log('Neelima');
console.log('Bhanu');
console.log('Bunny');


function calculate() {
	let sum = 0;
	for (let i = 0; i < 10; i++) {
		sum += i;
	}
	console.log('Math result ', sum);
}