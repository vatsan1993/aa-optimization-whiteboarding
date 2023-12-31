// adults

// Write a function adults(people)
// that takes in an array of person objects.
//  The function should return an array containing the
//  names of those who have an age of 18 or higher.

// Example:

let adults = (arr) => {
  return arr.filter((obj) => obj.age >= 18);
};

const ppl = [
  { name: 'John', age: 20 },
  { name: 'Jim', age: 13 },
  { name: 'Jane', age: 18 },
  { name: 'Bob', age: 7 },
];
console.log(adults(ppl));
