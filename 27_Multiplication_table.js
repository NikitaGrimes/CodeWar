//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

multiplicationTable = function(size) {
  return new Array(size).fill(new Array(size).fill(0))
    .map((arr, i) => arr.map((num, j) => (i + 1) * (j + 1)));
}
