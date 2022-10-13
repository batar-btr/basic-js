const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let result = [];

    arr.forEach((item,idx,array) => {
        switch(item) {
          case '--discard-next':
            array[idx+1] = null;
            break;
          case '--discard-prev':
            result.pop();
            break;
          case '--double-prev':
            result.push(array[idx-1]);
            break;
          case '--double-next':
            result.push(array[idx+1]);
            break;
          default: {
            result.push(item);
            break;
          }
        }
    })

    return result.filter(item => item);

  } else {
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform
};
