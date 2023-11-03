// threeUniqueVowels

// Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

// const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// Examples:

let threeUniqueVowels = (str) => {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < VOWELS.length; i++) {
    let vowel = VOWELS[i];
    if (str.includes(vowel)) {
      count++;
    }
  }
  return count >= 3;
};

console.log(threeUniqueVowels('delicious'));
console.log(threeUniqueVowels('the bootcamp'));
console.log(threeUniqueVowels('bootcamp'));
console.log(threeUniqueVowels('dog'));
console.log(threeUniqueVowels('go home'));
// => true
// => true
// => false
// => false
// => false
