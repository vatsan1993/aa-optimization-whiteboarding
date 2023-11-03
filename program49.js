// collapseString

// Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

// Hint: use the keyword continue

// Examples:
let collapseString = (str) => {
  let newStr = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      newStr += str[i];
    }
  }
  return newStr;
};
console.log(collapseString('apple'));
console.log(collapseString('AAAaalviiiiin!!!'));
console.log(collapseString('hello app academy'));
// => 'aple'
// => 'Aalvin!'
// => 'helo ap academy'
