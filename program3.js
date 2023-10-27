// printReverse

// Write a function printReverse(min, max) that returns
// an array of all numbers from max to min
// (exclusive), in reverse order.

// Examples:

let printReverse = (min, max) => {
  // Calculate the number of elements in the result array.
  const count = Math.floor((max - min) / 1) - 1;

  // Use Array.from to create the result array with the specified step intervals.
  return Array.from({ length: count }, (_, index) => max - index * 1 - 1);
};
console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]
