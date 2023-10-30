// twoDimensionalTotal

// Write a function twoDimensionalTotal(array)
// that takes in a 2D array of numbers and returns the total sum of
//  all elements. Examples:
let twoDimensionalTotal = (arr) => {
  return arr.reduce((a, b) => {
    return (
      a +
      b.reduce((num1, num2) => {
        return num1 + num2;
      })
    );
  }, 0);
};

const arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];
console.log(twoDimensionalTotal(arr1));
// => 40

const arr2 = [[2], [1, 9], [1, 1, 1]];
console.log(twoDimensionalTotal(arr2));
// => 15
