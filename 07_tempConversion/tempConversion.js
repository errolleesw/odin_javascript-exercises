const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius % 1 === 0 ? parseInt(celsius, 10) : parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit % 1 === 0 ? parseInt(fahrenheit, 10) : parseFloat(fahrenheit.toFixed(1));
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
