//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
  return new Set(string.toUpperCase()
    .split("")
    .filter(ch => ch.match(/[A-Z]/)))
    .size === 26;
}
