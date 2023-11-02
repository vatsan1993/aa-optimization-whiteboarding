// twoDimensionalSize

// Write a function twoDimensionalSize(array) that takes in a 2D-array as
// an argument. The function should return the total number of elements in
//  the 2D-array.

// Examples:

let twoDimensionalSize = (arr) => {
  let total = 0;
  arr.forEach((row) => {
    total += row.length;
  });
  return total;
};
const arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
console.log(twoDimensionalSize(arr1));
// => 9

const arr2 = [['a'], ['b', 'c', 'd', 'e']];
console.log(twoDimensionalSize(arr2));
// => 5
