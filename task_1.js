/**
 Write a function to convert temperature from Celsius to Fahrenheit.
 */

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (9 / 5) * celsius + 32;
  return fahrenheit;
}

const result = celsiusToFahrenheit(25);
console.log(result, " Fahrenheit");
