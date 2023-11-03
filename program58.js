// evenSumArray

// Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

// Examples:
let evenSumArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let total = 0;
    for (let j = 2; j <= val; j++) {
      if (j % 2 == 0) {
        total += j;
      }
    }
    newArr.push(total);
  }
  return newArr;
};

console.log(evenSumArray([6, 7, 5]));
console.log(evenSumArray([2, 8, 3, 5]));
// => [ 12, 12, 6 ]
// => [ 2, 20, 2, 6 ]
