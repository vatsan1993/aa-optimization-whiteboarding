// commonFactors

// Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.

// Examples:
let commonFactors = (val1, val2) => {
  let res = [];
  for (let i = 1; i <= Math.min(val1, val2); i++) {
    if (val1 % i == 0 && val2 % i == 0) {
      res.push(i);
    }
  }
  return res;
};
console.log(commonFactors(12, 50));
console.log(commonFactors(6, 24));
console.log(commonFactors(11, 22));
console.log(commonFactors(45, 60));

// => [ 1, 2 ]
// => [ 1, 2, 3, 6 ]
// => [ 1, 11 ]
// => [ 1, 3, 5, 15 ]
