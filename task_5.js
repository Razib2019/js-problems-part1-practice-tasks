/**
 Generate a random number between 10 to 20.
 */

function generateRandomNumber(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}

const result = generateRandomNumber(10, 20);
console.log("Random Number Between 10 to 20:", result);
