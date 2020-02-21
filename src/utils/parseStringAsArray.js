module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(",").map(subject => subject.trim());
};
