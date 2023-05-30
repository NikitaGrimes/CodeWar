//https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  return arr.sort((a, b) => {
    if (a === 0) return 1;
    if (b === 0) return -1;
    return 0;
  });
}
