// reverse2D

// Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.

// Examples:

let reverse2D = (arr) => {
  let str = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    let row = arr[i];
    str += row.reverse().join('');
  }
  return str;
};

const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i'],
];
console.log(reverse2D(arr1));
// => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick'],
];
console.log(reverse2D(arr2));
// => 'PatrickOscarMikeMattJulian'
