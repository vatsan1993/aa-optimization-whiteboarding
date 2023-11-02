// shortestWord

// Write a function shortestWord(sentence) that returns the shortest word
// of a sentence. You can assume that the words of the sentence all have
// different lengths.

// Examples:

let shortestWord = (sentence) => {
  let words = sentence.split(' ');
  let target = words[0];
  let size = words[0].length;
  words.forEach((word) => {
    if (word.length < size) {
      size = word.length;
      target = word;
    }
  });
  return target;
};

console.log(shortestWord('app academy is cool'));
console.log(shortestWord('programming bootcamp'));
// => 'is'
// => 'bootcamp'
