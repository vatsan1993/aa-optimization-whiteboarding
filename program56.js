// vowelShift

// Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

// const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// Examples:

let vowelShift = (sentence) => {
  let newSentence = '';
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];
    let index = VOWELS.indexOf(ch);
    if (index === 4) {
      newSentence += 'a';
    } else if (index >= 0 && index < 4) {
      newSentence += VOWELS[index + 1];
    } else {
      newSentence += sentence[i];
    }
  }
  return newSentence;
};

console.log(vowelShift('bootcamp'));
console.log(vowelShift('hello world'));
console.log(vowelShift('on the hunt'));
// => 'buutcemp'
// => 'hillu wurld'
// => 'un thi hant'
