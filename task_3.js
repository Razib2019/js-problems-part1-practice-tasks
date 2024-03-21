/**
 Write a function to count the number of vowels in a string.
 */

function vowelCount(myString) {
  let count = 0;
  for (let item of myString) {
    item = item.toLowerCase();
    if (
      item == "a" ||
      item == "e" ||
      item == "i" ||
      item == "o" ||
      item == "u"
    ) {
      count++;
    }
  }
  return count;
}

const myString = "I Am a gOOd boy.";
const result = vowelCount(myString);
console.log("Number of vowels in the string:", result);
