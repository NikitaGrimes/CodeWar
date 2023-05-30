//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString) {
  let parseRGB = (i, j) => parseInt(hexString.charAt(i) + hexString.charAt(j), 16);
  return {r:parseRGB(1, 2), g:parseRGB(3, 4), b:parseRGB(5, 6)};
}
