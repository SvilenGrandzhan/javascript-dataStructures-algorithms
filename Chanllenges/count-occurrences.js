const countOccurrences = (strings, symbol) => [...strings].filter((element) => element == symbol).length;
// destructuring to get single letters
// filter to check for occurrence
// new array length to get number of occurrence

countOccurrences("hello", "l");

module.exports = countOccurrences;
