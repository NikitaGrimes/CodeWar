//https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  const A_CODE = 65;
  const ALPHABET_LENGTH = 26
  return text.toUpperCase()
    .split("")
    .filter(letter => letter.charCodeAt(0) >= A_CODE && letter.charCodeAt(0) < A_CODE + ALPHABET_LENGTH)
    .map(letter => letter.charCodeAt(0) - A_CODE + 1)
    .join(" ");
}
