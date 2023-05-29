//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  let repetitions = 0;
	return s.toLowerCase()
    .split("")
    .map(letter => letter.toUpperCase() + letter.repeat(repetitions++))
    .join("-");
}
