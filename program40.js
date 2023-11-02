// variableNameify

// Write a function variableNameify(words) that takes in an array of words.
//  The function should return a string representing the variable name
//  obtained by combining the words and captitalizing them in mixCased
//  style.

// Examples:
let variableNameify = (arr) => {
  let result = arr[0].toLowerCase();
  arr.forEach((word, index, newArr) => {
    if (index > 0)
      result += word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return result;
};
console.log(variableNameify(['is', 'prime']));
console.log(variableNameify(['remove', 'last', 'vowel']));
console.log(variableNameify(['MaX', 'VALUE']));
// => 'isPrime'
// => 'removeLastVowel'
// => 'maxValue'
