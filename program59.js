// numsToWords

// Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" representation. Assume the input string only contains numeric characters.

// Examples:
let numsToWords = (str) => {
  let words = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str[i]);
    res += words[num];
  }
  return res;
};
console.log(numsToWords('42'));
console.log(numsToWords('123'));
console.log(numsToWords('159598'));

// => 'FourTwo'
// => 'OneTwoThree'
// => 'OneFiveNineFiveNineEight'
