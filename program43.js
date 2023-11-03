// reverb

// Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

// Examples:

let reverb = (word) => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = word.length - 1; i >= 0; i--) {
    let ch = word[i];
    if (vowels.includes(ch)) {
      return word + word.slice(i);
    }
  }
  return word;
};
console.log(reverb('running'));
console.log(reverb('wild'));
console.log(reverb('debugged'));
console.log(reverb('my'));

// => 'runninging'
// => 'wildild'
// => 'debuggeded'
// => 'my'
