// commonPrimeFactors

// Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.

// Examples:
let primes = [];
let nonPrimes = [];
let isPrime = (val) => {
  if (val === 0 || val === 1 || nonPrimes.includes(val)) {
    return false;
  }
  if (primes.includes(val)) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(val); i++) {
    if (val % i === 0) {
      nonPrimes.push(i);
      return false;
    }
  }
  primes.push(val);
  return true;
};
console.log(isPrime(2));
let commonPrimeFactors = (val1, val2) => {
  let res = [];
  for (let i = 1; i <= Math.min(val1, val2); i++) {
    if (val1 % i == 0 && val2 % i == 0) {
      if (isPrime(i)) {
        res.push(i);
      }
    }
  }
  return res;
};

console.log(commonPrimeFactors(12, 50));
console.log(commonPrimeFactors(6, 24));
console.log(commonPrimeFactors(11, 22));
console.log(commonPrimeFactors(45, 60));
// => [ 2 ]
// => [ 2, 3 ]
// => [ 11 ]
// => [ 3, 5 ]
