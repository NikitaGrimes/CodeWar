//https://www.codewars.com/kata/5262119038c0985a5b00029f

function isPrime(num) {
  if(num <= 1)
    return false;
  for(let i = 2; i <= num ** (1/2); i++){
    if(num % i == 0)
      return false;
  }
  return true;
}
