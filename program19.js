// zipArray

// Write a function zipArray(arr1, arr2)
//  that takes in two arrays and "zips"
//  them together by returning a single 2D-array.
//   Assume that both input arrays have the same length.

// Examples:
let zipArray = (arr1, arr2) => {
  return arr1.map((val1, index1) => {
    return [val1, arr2[index1]];
  });
};
const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
