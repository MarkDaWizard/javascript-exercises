const convertToCelsius = function(temperatureToConvert) {
  return Math.round((temperatureToConvert - 32) * (5/9) * 10)/10;
};

const convertToFahrenheit = function(temperatureToConvert) {
  return Math.round((temperatureToConvert * 1.8 + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
