// factorArray

// Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

// Examples:
let factorArray = (arr, num) => {
  let newArr = arr.filter((val) => num % val == 0);
  return newArr;
};
console.log(factorArray([2, 3, 4, 5, 6], 20)); // => [2,4,5]
console.log(factorArray([2, 3, 4, 5, 6], 35)); // => [5]
console.log(factorArray([10, 15, 20, 25], 5)); // => []
