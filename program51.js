// mindPsAndQs

// Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

// Hint: Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop!

// Nested loops not needed!

// Examples:
let mindPsAndQs = (str) => {
  let maxSize = 0;
  let streakCount = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch == 'P' || ch == 'Q') {
      streakCount++;
      if (streakCount > maxSize) {
        maxSize = streakCount;
      }
    } else {
      streakCount = 0;
    }
  }
  return maxSize;
};

console.log(mindPsAndQs('BOOTCAMP'));
console.log(mindPsAndQs('APCDQQPPC'));
console.log(mindPsAndQs('PQPQ'));
console.log(mindPsAndQs('PPPXQPPPQ'));
// => 1
// => 4
// => 4
// => 5
