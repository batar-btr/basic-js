const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } else {
    if (!(date instanceof Date)) {
      throw new Error('Invalid date!')
    } else {
      if (date.hasOwnProperty('toString')) {
        throw new Error('Invalid date!');
      } else {
        let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
        return season[date.getMonth()];
      }
    }
  }
}

module.exports = {
  getSeason
};
