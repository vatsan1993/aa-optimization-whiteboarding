// countScores

// Write a function countScores(people)
// that takes in an array of score objects,
// people, as its input. A score object, people,
// has two key-value pairs: a name (string) and a score (number).
//  countScores(people) should return an object that has
//   key-value pairs where each name is a key and the value
//   is their total score.

let countScores = (ppl) => {
  let result = {};
  ppl.forEach((obj) => {
    let { name, score } = obj;
    if (result[name] == undefined) {
      result[name] = score;
    } else {
      result[name] += score;
    }
  });
  return result;
};

// Example 1:
const ppl = [
  { name: 'Anthony', score: 10 },
  { name: 'Fred', score: 10 },
  { name: 'Anthony', score: -8 },
  { name: 'Winnie', score: 12 },
];
console.log(countScores(ppl));
// => { Anthony: 2, Fred: 10, Winnie: 12 }

// Example 2
const peeps = [
  { name: 'Anthony', score: 2 },
  { name: 'Winnie', score: 2 },
  { name: 'Fred', score: 2 },
  { name: 'Winnie', score: 2 },
  { name: 'Fred', score: 2 },
  { name: 'Anthony', score: 2 },
  { name: 'Winnie', score: 2 },
];
console.log(countScores(peeps));
// => { Anthony: 4, Fred: 4, Winnie: 6 }
