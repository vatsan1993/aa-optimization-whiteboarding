// maxValue

// Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

// Examples:

// maxValue([12, 6, 43, 2]);  // => 43
// maxValue([]);  // => null
// maxValue([-4, -10, 0.43]);  // => 0.43

let maxValue = (arr) => {
  if (arr.length == 0) return null;
  let val = arr.reduce((a, b) => {
    return a > b ? a : b;
  });
  return val;
};

console.log(maxValue([12, 6, 43, 2])); // => 43
console.log(maxValue([])); // => null
console.log(maxValue([-4, -10, 0.43])); // => 0.43
