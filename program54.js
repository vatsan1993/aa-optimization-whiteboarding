// splitHalfArray

// Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

// Examples:

let splitHalfArray = (arr) => {
  if (arr.length % 2 === 0) {
    let midIndex = arr.length / 2;
    return [arr.slice(0, midIndex), arr.slice(midIndex)];
  }

  let midIndex = arr.length / 2;
  return [arr.slice(0, midIndex), arr.slice(midIndex + 1)];
};

console.log(splitHalfArray([1, 2, 3, 4, 5]));

// => [ [ 1, 2 ], [ 4, 5 ] ]
console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));

// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
