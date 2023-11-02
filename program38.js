// alueConcat

// Write a function valueConcat(array, obj) that takes in an array and
// object The function should return a new array where each element is
// concatenated with it's corresponding value from the object.

// Examples:
let valueConcat = (arr, obj) => {
  return arr.map((val) => {
    if (val in obj) {
      return val + obj[val];
    } else {
      return val;
    }
  });
};

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' };
console.log(valueConcat(arr, obj));
// => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }));
// => [ 'a', 'b2', 'c3' ]
