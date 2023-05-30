//https://www.codewars.com/kata/555624b601231dc7a400017a

function josephusSurvivor(n,k){
  let array = new Array(n).fill(1).map((el, i) => i + 1);
  let i = 0;
  while(n > 1){
    i = (i + k - 1) % n;
    array.splice(i, 1);
    n--;
  }
  return array[0];
}
