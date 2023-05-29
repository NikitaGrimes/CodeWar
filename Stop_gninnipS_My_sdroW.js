//https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
  let words = string.split(" ");
  words.map((el, index, arr) => {
    if(el.length >= 5){
      arr[index] = [...el].reverse().join("");
    }
  })
  return words.join(" ");
}
