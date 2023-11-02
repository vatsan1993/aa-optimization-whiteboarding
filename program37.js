// isPassing

// Write a function isPassing(assessments) that takes in an array of
// assessment objects. The function should return true if the average
// assessment score is at least 70. It should return false otherwise.

// Examples:

let isPassing = (assessments) => {
  let sum = assessments.reduce((total, obj) => {
    return total + obj.score;
  }, 0);
  return sum / assessments.length >= 70;
};
const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 },
];
console.log(isPassing(assessments1));
// => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 },
];
console.log(isPassing(assessments2));
// => false
