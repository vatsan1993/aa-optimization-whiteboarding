// intersect

// Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

// Examples:

let intersect = (arr1, arr2) => {
  let arr3 = Array.from(new Set(arr1.concat(arr2)));
  return arr3.filter((val) => arr1.includes(val) && arr2.includes(val));
};

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []
