/**
 You are given an array of numbers. Count how many times a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2


sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

function numberCount(numbers) {
  const find = 5;
  let count = 0;
  for (number of numbers) {
    if (number === find) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const result = numberCount(numbers);
console.log(result);
