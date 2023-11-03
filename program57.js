// hasSymmetry

// Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.

// TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

// Examples:

let hasSymmetry = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    let j = arr.length - i - 1;
    if (arr[i] !== arr[j]) {
      return false;
    }
  }

  return true;
};

console.log(hasSymmetry([1, 2, 3, 3, 2, 1]));
console.log(hasSymmetry([1, 2, 3, 3, 4, 1]));
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']));
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']));

// => true
// => false
// => true
// => false
