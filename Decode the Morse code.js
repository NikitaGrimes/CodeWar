//https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function(morseCode){
  let words = morseCode.trim().split("   ");
  words.map((word, i, wordArr) => {
    wordArr[i] = word.split(" ")
      .map(letter => MORSE_CODE[letter])
      .join("");
  });
  return words.join(" ");
}
