// oddWordsOut

// Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

// Examples:
let oddWordsOut = (str) => {
  let newWords = [];
  let words = str.split(' ');
  for (let word of words) {
    if (word.length % 2 == 0) {
      newWords.push(word);
    }
  }
  return newWords.join(' ');
};
console.log(oddWordsOut('go to the store and buy milk'));
console.log(oddWordsOut('what is the answer'));
// => 'go to milk'
// => 'what is answer'
