//https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

function int32ToIp(int32){
  let ipv4 = [];
  for(let i = 0; i < 4; i++){
    ipv4.push(int32 % 256);
    int32 = Math.trunc(int32 / 256);
  }
  return ipv4.reverse().join(".");
}
