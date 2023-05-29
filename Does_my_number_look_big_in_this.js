//https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  let numbers = value.toString().split("");
  return value === numbers.reduce((x1, x2) => x1 + x2 ** numbers.length, 0);
}
