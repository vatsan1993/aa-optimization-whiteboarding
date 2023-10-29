let firstNPrimes = (n) => {
  let primes = [];

  for (let i = 2; primes.length < n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
};

// Using the isPrime function you made, write a function firstNPrimes(n)
//  that returns an array of the first n prime numbers.

// Examples:
console.log(firstNPrimes(0));
// => []
console.log(firstNPrimes(1));
// => [2]
console.log(firstNPrimes(4));
// => [2, 3, 5, 7]
