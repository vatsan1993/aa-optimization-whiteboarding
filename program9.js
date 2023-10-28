// oddRange

// Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

// Examples:

let oddRange = (num) => {
  if (num % 2 === 0) {
    num--;
  }
  return Array.from(
    { length: Math.ceil(num / 2) },
    (_, index) => 2 * index + 1
  );
};
console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6)); // => [ 1, 3, 5 ]
