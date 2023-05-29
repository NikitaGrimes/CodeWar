//https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
  let set = new Set();
  let letters = str.toLowerCase().split("");
  for(let letter of letters){
    if(set.has(letter))
      return false;
    set.add(letter);
  }
  return true;
}
