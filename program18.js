// divisibleByThreePairSum

// Write a function divisibleByThreePairSum(array) that
// takes an array of numbers. It should return an array of
// all the pairs of indices, whose elements sum to a multiple of three.

// Examples:

let divisibleByThreePairSum = (arr) => {
  let res = [];
  arr.forEach((value, index, newArr) => {
    for (let index2 = index + 1; index2 < newArr.length; index2++) {
      let total = value + newArr[index2];
      if (total % 3 == 0) {
        res.push([index, index2]);
      }
    }
  });
  return res;
};

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2); // => [[1, 3]]
