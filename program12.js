// mirrorArray

// Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

// Examples:
let mirrorArray = (arr) => {
  let arr2 = arr.map((val, index) => {
    return arr[arr.length - index - 1];
  });
  return arr.concat(arr2);
};

console.log(mirrorArray([1, 2, 3]));
// => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd']));
// => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
