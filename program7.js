// myIndexOf

// Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

// CONSTRAINT: Do not use the indexOf or includes method

// Examples:
let myIndexOf = (arr, target) => {
  let res = arr.reduce((acc, val, index, arr) => {
    if (val === target) {
      return index;
    } else {
      return null;
    }
  }, null);
  return res;
};
console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
console.log(myIndexOf([5, 6, 7, 8], 2)); // => -1
