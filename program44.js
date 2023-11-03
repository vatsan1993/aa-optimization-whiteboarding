// countRepeats

// Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

// Examples:
let countRepeats = (str) => {
  let counts = {};
  for (let ch of str) {
    if (ch in counts) {
      counts[ch]++;
    } else {
      counts[ch] = 1;
    }
  }
  return Object.values(counts).reduce((count, val) => {
    if (val > 1) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
};

console.log(countRepeats('calvin'));
console.log(countRepeats('caaaalvin'));
console.log(countRepeats('pops'));
console.log(countRepeats('mississippi'));
console.log(countRepeats('hellobootcampprep'));

// => 0
// => 1
// => 1
// => 3
// => 4
