//https://www.codewars.com/kata/51edd51599a189fe7f000015

var solution = function(firstArray, secondArray) {
  return firstArray.map((el, i) => (el - secondArray[i]) ** 2)
    .reduce((x1, x2) => x1 + x2) / firstArray.length;
}
