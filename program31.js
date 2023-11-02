// lcm

// Write a function lcm(num1, num2) that returns the lowest number which
//  is a multiple of both num1 and num2.

// Examples:

let lcm = (val1, val2) => {
  let max = Math.max(val1, val2);
  for (let i = max; i <= val1 * val2; i++) {
    if (i % val1 == 0 && i % val2 == 0) {
      return i;
    }
  }
};
console.log(lcm(2, 3)); // => 6
console.log(lcm(6, 10)); // => 30
console.log(lcm(24, 26)); // => 312
