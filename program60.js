// moreDotLessDash

// Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

// Examples:
let moreDotLessDash = (str) => {
  let dots = 0;
  let minus = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch == '.') {
      dots++;
    } else if (ch == '-') {
      minus++;
    }
  }
  return dots > minus;
};
console.log(moreDotLessDash('2-D arrays are fun. I think.'));
console.log(moreDotLessDash('.-.-.'));
console.log(moreDotLessDash('.-'));
console.log(moreDotLessDash('..--'));
// => true
// => true
// => false
// => false
