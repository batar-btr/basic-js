const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, { repeatTimes, separator = '+', addition , additionRepeatTimes, additionSeparator = '|' }) {
  if(typeof str !== 'string' && str !== undefined) {
    str = str + '';
  }

  if(typeof addition !== 'string' && addition !== undefined) {
    addition = addition + '';
  }

  let add = '';

  if(addition) {
    add = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  }

  
  return new Array(repeatTimes).fill(str+add).join(separator);
}

module.exports = {
  repeater
};
