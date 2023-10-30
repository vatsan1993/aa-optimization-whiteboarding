let peakFinder = (arr) => {
  let result = [];
  arr.forEach((val, index, newArr) => {
    if (index == 0 && val > newArr[1]) {
      result.push(index);
    } else if (index == newArr.length - 1 && val > newArr[index - 1]) {
      result.push(index);
    } else if (val > newArr[index - 1] && val > newArr[index + 1]) {
      // console.log(index);
      result.push(index);
    }
  });
  return result;
};

// Write a function peakFinder(array) that takes in an array of numbers.
// It should return an array containing the indices of all the peaks.
// A peak is an element that is greater than both of its neighbors.
// If it is the first or last element, it is a peak
// if it is greater than
//  its one neighbor. Assume the array has a length of at least 2.

// Examples:
console.log(peakFinder([1, 2, 3, 2, 1]));
// => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5]));
// => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]
