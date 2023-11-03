// pairsToString

// Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

// Examples:

let pairsToString = (arr) => {
  return arr.reduce((str, row) => {
    return str + row[0].repeat(row[1]);
  }, '');
};

const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2],
];
console.log(pairsToString(array1));
// => 'aaabcc'

const array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1],
];
console.log(pairsToString(array2));
// => 'food!'
