// factorial

// Write a function factorial(n), that returns the factorial of the
//  number n. For example, the factorial of 4 is 4 _ 3 _ 2 \* 1 = 24.

// Examples:
let memo = {};
let factorial = (val) => {
  if (val == 1) {
    return 1;
  }
  if (val in memo) {
    return memo[val];
  } else {
    memo[val] = val * factorial(val - 1);
    return memo[val];
  }
};
console.log(factorial(1));
// => 1
console.log(factorial(4));
// => 24
console.log(factorial(5));
// => 120
console.log(factorial(10));
// => 3628800
console.log(factorial(100));
console.log(factorial(115));
console.log(factorial(150));
