// objectToString

// Write a function objectToString(count) that takes in a char count
// object and returns a string representing the counts of each character.

// Examples:

let objectToString = (obj) => {
  let str = '';
  for (let ch in obj) {
    let times = obj[ch];
    str += ch.repeat(times);
  }
  return str;
};
console.log(objectToString({ a: 2, b: 4, c: 1 }));
console.log(objectToString({ b: 1, o: 2, t: 1 }));
// => 'aabbbbc'
// => 'boot'
