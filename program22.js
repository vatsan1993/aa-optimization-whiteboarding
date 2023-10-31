// twoDiff

// Write a function twoDiff(array), given an array of numbers,
// return a 2-D array, where each of the sub array are indices of the
// two numbers such that their difference is 2. If there are no such
//  numbers, return an empty array.

// NOTE: The pairs are unique. HINT: Account for negative difference too!

// Examples:
let twoDiff = (arr) => {
  let result = [];
  arr.forEach((val, index, newArr) => {
    for (let i = index + 1; i < arr.length; i++) {
      let diff = val - newArr[i];
      diff = Math.abs(diff);
      if (diff === 2) {
        result.push([index, i]);
      }
    }
  });
  return result;
};
console.log(twoDiff([2, 3, 4, 6, 1, 7]));
// => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5]));
// => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([]));
// => []
