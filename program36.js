// greatestCommonFactor

// Write a function greatestCommonFactor(num1, num2) that returns the
// largest number that is divides both num1 and num2.

// Examples:
let greatestCommonFactor = (val1, val2) => {
  let min = Math.min(val1, val2);
  let gcf = 1;
  for (let i = 2; i < min; i++) {
    if (val1 % i == 0 && val2 % i == 0) {
      gcf = i;
    }
  }
  return gcf;
};
console.log(greatestCommonFactor(15, 25));
// => 5
console.log(greatestCommonFactor(16, 24)); //=> 8
console.log(greatestCommonFactor(7, 11));
// => 1
