//https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
  let canClose = 0;
  for (let value of parens){
    switch (value){
        case '(':
          canClose++;
          break;
        case ')':
          canClose--;
          break;
    }
    if(canClose < 0)
      return false;
  }
  if (canClose === 0)
    return true;
  return false;
}
