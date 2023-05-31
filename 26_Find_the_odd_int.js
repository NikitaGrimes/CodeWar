//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  return A.reduce((a, b) => A.filter(num => num === b).length % 2 === 1 ? b : a, 0);
}
