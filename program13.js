// abbreviate

// Write a function abbreviate(sentence) that takes in a
// sentence string and returns a new sentence where words
// longer than 4 characters have their vowels removed.
//  Assume the sentence has all lowercase characters.
//  Feel free to use the array below in your solution:
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

// Examples:
let abbreviate = (sentence) => {
  let words = sentence.split(' ');
  words = words.map((word) => {
    if (word.length > 4) {
      return word.replace(/[aeiou]/gi, '');
    } else return word;
  });
  return words.join(' ');
};
console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'
