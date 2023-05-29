//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  let map = new Map();
  map.set("NORTH", "SOUTH");
  map.set("SOUTH", "NORTH");
  map.set("WEST", "EAST");
  map.set("EAST", "WEST");
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] === map.get(arr[i + 1])){
      arr.splice(i, 2);
      i -= 2;
    }
  }
  return arr;
}
