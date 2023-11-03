// powerSequence

// Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

// The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

// Examples:
let powerSequence = (a, n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Math.pow(a, i));
  }
  return arr;
};
console.log(powerSequence(3, 4));
console.log(powerSequence(2, 6));
console.log(powerSequence(8, 3));
// => [ 3, 9, 27, 81 ]
// => [ 2, 4, 8, 16, 32, 64 ]
// => [ 8, 64, 512 ]
