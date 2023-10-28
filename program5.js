// isPrime

// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

// Examples:

// isPrime(2);  // => true
// isPrime(10);  // => false
// isPrime(11);  // => true
// isPrime(9);  // => false
// isPrime(2017);  // => true

let isPrime = (num) => {
  if (num == 2 || num == 3) {
    return true;
  } else {
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
