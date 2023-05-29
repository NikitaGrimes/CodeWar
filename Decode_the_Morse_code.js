//https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function(morseCode){
  return morseCode.trim()
    .split("   ")
    .map(word => word.split(" ")
      .map(letter => MORSE_CODE[letter])
      .join(""))
    .join(" ");
}
