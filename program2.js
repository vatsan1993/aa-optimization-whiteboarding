// logBetweenStepper

// Write a function logBetweenStepper(min, max, step)
//  that takes in three numbers as parameters.
//  The function should return an array of numbers
//  between min and max at step intervals.

// Examples:

// logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
// logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]

function logBetweenStepper(min, max, step) {
  // Check if step is non-positive or invalid, in which case return an empty array.
  if (step <= 0 || min > max) {
    return [];
  }

  // Calculate the number of elements in the result array.
  const count = Math.floor((max - min) / step) + 1;

  // Use Array.from to create the result array with the specified step intervals.
  return Array.from({ length: count }, (_, index) => min + index * step);
}

console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]

// console.log(
//   Array.from({ length: 5 }, (val, index) => {
//     return [val, index];
//   })
// );
