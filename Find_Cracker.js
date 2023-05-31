//https://www.codewars.com/kata/59f70440bee845599c000085

function findHack(arr) {
  let names = [];
  for(let item of arr)
    if (item[1] > 200 || count(item[2]) !== item[1])
      names.push(item[0]);
  return names;
}

function count(arr){
  return arr.reduce((a, b) => a + convert(b), 0) + 
    (arr.length >=5 && arr.every(el => el.match(/[AB]/)) ? 20 : 0);
}

function convert(letter){
  switch (letter){
      case "A":
        return 30; 
      case "B":
        return 20;
      case "C":
        return 10;
      case "D":
        return 5;
      default:
        return 0;
  }
}
