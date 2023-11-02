// longWordCount

// Write a function longWordCount(string) that takes in a string and
// returns the number of words longer than 7 characters.

// Examples:

let longWordCount = (str) => {
  if (str.length == 0) return 0;
  let words = str.split(' ');
  return words.reduce((a, word) => {
    if (word.length > 7) {
      return a + 1;
    } else {
      return a;
    }
  }, 0);
};
console.log(longWordCount(''));
// => 0
console.log(longWordCount('short words only'));
// => 0
console.log(longWordCount('one reallylong word'));
// => 1
console.log(longWordCount('two reallylong words inthisstring'));
// => 2
console.log(longWordCount('allwordword longwordword wordswordword'));
// => 3
console.log(longWordCount('seventy schfifty five'));
// => 1
