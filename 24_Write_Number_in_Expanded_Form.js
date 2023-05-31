//https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  return num.toString()
    .split("")
    .map((el, i) => el + "0".repeat(num.toString().length - i - 1))
    .filter(el => el.match(/[1-9]/))
    .join(" + ");
}
