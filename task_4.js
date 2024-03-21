/**
 Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function findLongestWord(myString) {
  const words = myString.split(" ");
  let longestWordLength = 0;
  let longestWord = null;
  for (let word of words) {
    if (longestWordLength < word.length) {
      longestWordLength = word.length;
      longestWord = word;
    }
  }
  return longestWord;
}

const myString = "I am learning Programming to become a programmer";
const result = findLongestWord(myString);
console.log(result);
