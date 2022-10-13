const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [...String(n)];
  let sum = [];
  arr.forEach((digit,idx,array) => {
    let digitArr = [...array];
    digitArr.splice(idx, 1);
    sum.push(+digitArr.join(''));
  })
  let max = Math.max(...sum);
  return max;
}

module.exports = {
  deleteDigit
};
