// valueCounter

// Write a function valueCounter(obj, val) that takes in an object
//  and a value, the function should return the number of times val
//  repeats as a value in obj.

// Examples:
let valueCounter = (obj, val) => {
  if (Object.values(obj).includes(val)) {
    let values = Object.values(obj);
    let result = values.reduce((a, element) => {
      if (element === val) return a + 1;
      else {
        return a;
      }
    }, 0);
    return result;
  } else if (val in obj) {
    return obj[val];
  } else {
    return 0;
  }
};

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' };
console.log(valueCounter(obj1, 'Anne'));
// => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
console.log(valueCounter(obj2, 88));
// => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' };
console.log(valueCounter(pairs, 'Roman'));
// => 2
