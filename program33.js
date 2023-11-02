// hipsterfy

// Write a function hipsterfy(sentence) that takes takes a string
// containing several words as input. Remove the last vowel from each
// word. 'y' is not a vowel.

// Examples:

let hipsterfyWord = (word) => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = word.length - 1; i >= 0; i--) {
    let ch = word[i];
    if (vowels.includes(ch)) {
      if (i == 0) {
        return word.slice(1);
      } else if (i == word.length - 1) {
        return word.slice(0, i);
      } else {
        return word.slice(0, i) + word.slice(i + 1);
      }
    }
  }
  return word;
};
let hipsterfy = (sentence) => {
  let words = sentence.split(' ');
  words.forEach((word, index, arr) => {
    arr[index] = hipsterfyWord(word);
  });
  return words.join(' ');
};

console.log(hipsterfy('proper'));
console.log(hipsterfy('proper tonic panther'));
console.log(hipsterfy('towel flicker banana'));
console.log(hipsterfy('runner anaconda'));
console.log(hipsterfy('turtle cheeseburger fries'));

// => "propr"
// => "propr tonc panthr"
// => "towl flickr banan"
// => "runnr anacond"
// => "turtl cheeseburgr fris"
