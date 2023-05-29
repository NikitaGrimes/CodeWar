//https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
  return string.replace(/\w{5,}/g, word => word.split("").reverse().join(""));
}
