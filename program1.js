// Define a function logBetween(lowNum, highNum)
// that will return an array from lowNum to highNum,
// inclusive. Inclusive means that the range includes
// lowNum and highNum.

// Examples:

// logBetween(-1, 2);  // => [-1, 0, 1, 2]
// logBetween(14, 6);  // => []
// logBetween(4, 6);  // => [4, 5, 6]
// function logBetween(lowNum, highNum) {
//   if (lowNum > highNum) {
//     return [];
//   }
//   let arr = [];
//   function fillValue() {
//     if (lowNum > highNum) {
//       return;
//     }
//     arr.push(lowNum);
//     lowNum++;
//     fillValue();
//   }
//   fillValue();
//   return arr;
// }

function logBetween(lowNum, highNum) {
  // Calculate the length of the range and
  // create an array with that length.
  return Array.from(
    { length: highNum - lowNum + 1 },
    (_, index) => lowNum + index
  );
}

// both the functions had O(n) time complexity but the second
// function is way shorter compared to the first one
console.log(logBetween(-1, 2));
console.log(logBetween(4, 6));
