// const axios = require('axios');

/*
1.Passing 10 as the initial value to Step1
2.If there is no error, then passing the result to Step2
3.If there is no error again, then passing the result to Step3
4.Finally, printing the result.
*/

step1(10, function (result1, error) {
	if (!error) {
		step2(result1, function (result2, error) {
			if (!error) {
				step3(result2, function (result3, error) {
					if (!error) {
						console.log('Results ' + result3); 
					}
					// 40
				});
			}
		});
	}
});

function step1(value, callback) {
	callback(value + 10, false);
}

function step2(value, callback) {
	callback(value + 10, false);
}

function step3(value, callback) {
	callback(value + 10, false);
}


// Callback hell
 
/*
CallBack hell Solutions : 

1. Write Comments
2. Split Callbacks into Smaller functions
3. Using Promises
*/

//-------------------------------------------------------------------------//

// 2. Split Callbacks into Smaller functions

/*
step1(10, function(result1, error) {
	if (!error) {
		return result1;
	}
});

function step1(value, callback) {
	let result1 = callback(value + 10, false);
	step2(result1, function(result2, error) {
		if (!error) {
			return result2;
		}
	});
}

function step2(value, callback) {
	let result2 = callback(value + 10, false);
	step3(result2, function(result3, error) {
		if (!error) {
			return result3;
		}
	});
}

function step3(value, callback) {
	let result3 = callback(value + 10, false);
	console.log(result3); //40
};
*/

//-------------------------------------------------------------------------------------//

// 3. Using Promises

/*
function step1(value, error) {
	return new Promise((resolve, reject) => {
		if (!error) {
			resolve(value + 10);
		} else {
			reject('SOmthing Went Wrong');
		}
	});
}

function step2(value, error) {
	return new Promise((resolve, reject) => {
		if (!error) {
			resolve(value + 10);
		} else {
			reject('SOmthing Went Wrong');
		}
	});
}

function step3(value, error) {
	return new Promise((resolve, reject) => {
		if (!error) {
			resolve(value + 10);
		} else {
			reject('SOmthing Went Wrong');
		}
	});
}


// consuming code

step1(10, false)
	.then((result1) => step2(result1, false))
	.then((result2) => step3(result2, false))
	.then((result3) => console.log('Final Result', result3)) 
	.catch((error) => console.log(error));
*/

// Final Result 40