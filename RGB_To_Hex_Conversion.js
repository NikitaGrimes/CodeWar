//https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b){
  return conversion(r) + conversion(g) + conversion(b);
}

function conversion(number){
  number = number > 255 ? 255 : number;
  return number < 0 ? "00" : number.toString(16).replace(/^.{0,1}$/, word => "0" + word).toUpperCase();
}
