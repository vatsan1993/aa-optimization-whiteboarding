// pairProduct

// Write a function pairProduct(arr, num) that accepts an array of numbers
// , arr, and a target number, num. It should return pairs of indices
//  whose elements multiply to num. No pair should appear twice in the
//  result.

// CONSTRAINT: Use only while loops. No for loops.

// Examples:
let pairProduct = (arr, val) => {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    let val1 = arr[i];
    let j = i + 1;
    while (j < arr.length) {
      let val2 = arr[j];
      if (val1 * val2 == val) {
        result.push([i, j]);
      }
      j++;
    }
    i++;
  }
  return result;
};
console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]
