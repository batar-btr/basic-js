const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let cnt = 1;
  let res = '';
  let arr = [...str];
  arr.forEach((char,idx,a)=> {
    if(char === a[idx+1]) {
      cnt +=1;
    } else {
      if(cnt === 1) {
        res += char;
      } else {
        res += `${cnt}${char}`;
        cnt = 1;
      }
    }
  })
  return res;
}
// function encodeLine(str) {
//   let result = {};
//   let uniqChar = new Set(str);
//   uniqChar.forEach(char => {
//     let regExp = new RegExp(char, 'g');
//     let charAmount = str.match(regExp).length;
//     result[char] = charAmount;
//   })
//   return Object.entries(result).map(item => `${item[1]}${item[0]}`).join('');
// }

module.exports = {
  encodeLine
};
