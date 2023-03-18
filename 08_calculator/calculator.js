const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function (arr) {
  let product = 1;
  // console.log('Product = ' + product)
  for (let i = 0; i < arr.length; i++) {
    // console.log('Product = ' + product);
    // console.log('Array Value = ' + arr[i]);
    product = product * arr[i];
  }
  return product;
};

const power = function (a,b) {
  return a**b;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// console.log(multiply([1,3]));
// console.log(factorial(5));
console.log(power(2,3));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
