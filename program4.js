// fizzBuzz

// Define a function fizzBuzz(max)
// that takes a number and returns an
// array of every number from 0 to max
// that is divisible by either 3 or 5, but not both.

// Examples:

// fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]

const fizzBuzz = (num) => {
  let min = 1;
  let count = Math.floor(num - min) - 1;
  let arr = Array.from({ length: num }, (_, index) => {
    return min + index;
  });

  return arr.filter(
    (val) =>
      (val % 3 !== 0 && val % 5 !== 0 && val % 3 === 0) ||
      ((val % 5 === 0 || val % 3 == 0) && val !== num)
  );
};
console.log(fizzBuzz(20));
