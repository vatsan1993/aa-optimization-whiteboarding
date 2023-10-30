// countInnerElement

// Write a function countInnerElement(arr) that takes in a
// 2-D array of elements. Each element of arr is a sub array
// that contains multiple elements. The number of elements contained
// in each sub array are not the same. You can assume each sub array
// contains at least one element. You should return an object that
// counts how many times each element in each sub array repeats.

// Examples:
let countInnerElement = (arr) => {
  let data = {};
  //   arr.forEach((row) => {
  //     row.forEach((val) => {
  //       if (data[val]) {
  //         data[val]++;
  //       } else {
  //         data[val] = 1;
  //       }
  //     });
  //   });
  arr.flat().forEach((val) => {
    if (data[val]) {
      data[val]++;
    } else {
      data[val] = 1;
    }
  });
  return data;
};

const arr1 = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7],
];
console.log(countInnerElement(arr1));
// => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
  ['a', 'b', 'c', 'd'],
  ['a', 'b'],
  ['a', 'c', 'd', 'a'],
];
console.log(countInnerElement(arr2));
// => {a: 4, b: 2, c: 2, d: 2}
