//https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
  let obj = {};
  string.split("").forEach(letter => obj[letter] ? obj[letter]++ : obj[letter] = 1);
  return obj;
}
