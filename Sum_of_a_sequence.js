//https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (begin, end, step) => {
  if(end < begin) return 0;
  return Array(Math.ceil((end - begin + 1) / step)).fill(begin)
    .map((el, i) => el + i * step).reduce((a, b) => a + b, 0);
};

