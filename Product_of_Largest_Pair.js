//https://www.codewars.com/kata/5784c89be5553370e000061b

function maxProduct(a) {
  return a.splice(a.indexOf(Math.max.apply(Math, a)), 1)[0] * a.splice(a.indexOf(Math.max.apply(Math, a)), 1)[0];
}
