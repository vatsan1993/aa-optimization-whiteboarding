// countAdjacentSums

// Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

// Examples:

let countAdjacentSums = (arr, num) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] == num) {
      count++;
    }
  }
  return count;
};
console.log(countAdjacentSums([1, 5, 1], 6));
console.log(countAdjacentSums([7, 2, 4, 6], 7));
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));
// => 2
// => 0
// => 3
