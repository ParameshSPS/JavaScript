// Prime Number

function primeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let index = 2; index < n; index++) {
    if (n % index === 0) {
      return false;
    }
  };
  return true;
};

console.log(primeNumber(2));  // true
console.log(primeNumber(20)); // false
console.log(primeNumber(71)); // true
console.log(primeNumber(14)); // false
console.log(primeNumber(97)); // true
console.log(primeNumber(72)); // false
console.log(primeNumber(1));  // false


// Prime Numbers

function findThePrimes(num) {
  let nonPrimes = [], i, j, primes = [];
  for (i = 2; i <= num; ++i) {
    if (!nonPrimes[i]) {
      primes.push(i);
      for (j = i << 1; j <= num; j += i) {
        nonPrimes[j] = true;
      }
    }
  }
  return primes;
};
console.log(findThePrimes(100))


// Example

function isPrime(n) {
  if (n < 2)
    return `${n} is not a prime number`;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a prime number`;
    }
  };
  return `${n} is a prime number`;
};

console.log(isPrime(1));  // 1 is not a prime number
console.log(isPrime(2));  // 2 is a prime number
console.log(isPrime(17)); // 17 is a prime number


// Example

const isPrimess = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

console.log(isPrimess(5));  // true
console.log(isPrimess(10)); // false 
console.log(isPrimess(1));  // false
console.log(isPrimess(97)); // true


// Example

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});

console.log(myPrimeArray);
// [ 2, 3, 5, 7 ]