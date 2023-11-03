// signFlipCount;

// Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.

// Examples:

let signFlipCount = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] < 0 && arr[i + 1] > 0) || (arr[i] > 0 && arr[i + 1] < 0)) {
      count++;
    }
  }
  return count;
};

console.log(signFlipCount([5, 6, 10, 3]));
console.log(signFlipCount([-12, 0, -3, -5]));
console.log(signFlipCount([-12, 10, -3, -5]));
console.log(signFlipCount([1, -2, -3, -4]));
console.log(signFlipCount([-1, 11.3, -3, 100]));
// => 0
// => 0
// => 2
// => 1
// => 3
