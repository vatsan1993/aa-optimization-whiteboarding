// nextTwoPrimes

// Write a function nextTwoPrimes(num) that takes in a number num
// and returns the next two prime numbers greater than num.

// Examples:
let primes = {};
let isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};
let nextTwoPrimes = (num) => {
  let res = [];
  let val = num + 1;
  while (res.length !== 2) {
    let prime = isPrime(val);
    if (prime) {
      res.push(val);
    }
    val++;
  }
  return res;
};

console.log(nextTwoPrimes(2));
console.log(nextTwoPrimes(3));
console.log(nextTwoPrimes(7));
console.log(nextTwoPrimes(8));
console.log(nextTwoPrimes(20));
console.log(nextTwoPrimes(97));
// => [ 3, 5 ]
// => [ 5, 7 ]
// => [ 11, 13 ]
// => [ 11, 13 ]
// => [ 23, 29 ]
// => [ 101, 103 ]
