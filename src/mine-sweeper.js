const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let result = JSON.parse(JSON.stringify(matrix));

  function getSibling(x,y) {
      let left = matrix[x-1]?.[y];
      let right = matrix[x+1]?.[y];
      let top = matrix[x]?.[y-1];
      let bottom = matrix[x]?.[y+1];
      let topLeft = matrix[x-1]?.[y-1];
      let topRight = matrix[x+1]?.[y-1];
      let bottomLeft = matrix[x-1]?.[y+1];
      let bottomright = matrix[x+1]?.[y+1];

      let arr = [left, right, top, bottom, topLeft, topRight, bottomLeft, bottomright];
      let cnt = arr.filter(item => item).length;
      return cnt;
      
  }

  for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
          let cnt = getSibling(i,j)
          result[i][j] = cnt;
      }
  }

  return result;
}

module.exports = {
  minesweeper
};
