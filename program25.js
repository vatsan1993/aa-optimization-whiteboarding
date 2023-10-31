// elementCount

// Write a function elementCount(array) that returns a object.
//  Each key corresponds to an element in the array and the value
//  corresponds to how many times that element appears in the array.

// Example:
let elementCount = (arr) => {
  let res = {};
  arr.forEach((val) => {
    if (val in res) {
      res[val] += 1;
    } else {
      res[val] = 1;
    }
  });
  return res;
};
console.log(elementCount(['a', 'a', 'b', 'b']));
// => { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b']));
// => { "c": 2, "a": 2, "b": 1 }
