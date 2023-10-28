// reverseHyphenString

// Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

// Examples:
let reverseHyphenString = (str) => {
  let words = str.split('-');
  let midIndex = Math.round(words.length / 2);
  for (let i = 0; i <= midIndex; i++) {
    let temp = words[i];
    words[i] = words[words.length - i - 1];
    words[words.length - i - 1] = temp;
  }
  return words.join('-');
};
console.log(reverseHyphenString('Go-to-the-store')); // => "store-the-to-Go"
console.log(reverseHyphenString('Jump,-jump-for-joy')); // => "joy-for-jump-Jump,"
