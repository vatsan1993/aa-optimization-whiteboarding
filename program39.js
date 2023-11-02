// threeInARow

// Write a function threeInARow(arr) that takes in an array of numbers
// and returns true if the array contains 3 of the same number
// consecutively. The function should return false otherwise.

// Examples:
let threeInARow = (arr) => {
  for (let i = 0; i < arr.length - 4; i++) {
    let vals = arr.slice(i, i + 3);
    if (vals[0] == vals[1] && vals[1] == vals[2]) {
      return true;
    }
  }
  return false;
};
console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));
// => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3]));
// => false;
