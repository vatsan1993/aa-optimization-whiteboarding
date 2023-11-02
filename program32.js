// hipsterfyWord

// Write a function hipsterfyWord(word) that takes takes in a string
// and returns the string with the last vowel removed. 'y' is not a vowel.

// Examples:
let hipsterfyWord = (word) => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = word.length - 1; i >= 0; i--) {
    let ch = word[i];
    if (vowels.includes(ch)) {
      if (i == 0) {
        return word.slice(1);
      } else if (i == word.length - 1) {
        return word.slice(i);
      } else {
        return word.slice(0, i) + word.slice(i + 1);
      }
    }
  }
  return word;
};
console.log(hipsterfyWord('proper')); // => 'propr'
console.log(hipsterfyWord('tonic'));
// => 'tonc'
console.log(hipsterfyWord('PANTHER'));
// => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS'));
// => 'BACKWRDS'
