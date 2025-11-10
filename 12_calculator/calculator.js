const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, number) => sum + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((multiplication, number) => multiplication * number, 1);

};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	const factorialNumbers = [];
  for(let i = 1; i <= a; i++) factorialNumbers.push(i);
  return factorialNumbers.reduce((multiplication, number) => multiplication * number, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
