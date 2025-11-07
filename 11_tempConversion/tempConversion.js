const convertToCelsius = function(value) {
  let result;
  const convertedValue = (value - 32) * (5/9);
  result = Math.round(convertedValue * 10) / 10;
  return result;
};

const convertToFahrenheit = function(value) {
  let result;
  const convertedValue = (value * (9/5)) + 32;
  result = Math.round(convertedValue * 10) / 10;
  return result;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
