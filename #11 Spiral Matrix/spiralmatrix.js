/* Problem 11: Spiral Matrix
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
 
Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7] */

const spiralMatrix = (matrix) => {
  let rowEnd = matrix.length - 1; //3
  let colEnd = matrix[0].length - 1; //3
  let rowSt = 0;
  let colSt = 0;
  const arr = [];
  while (rowSt <= rowEnd && colSt <= colEnd) {

    for (let i = colSt; i <= colEnd; i++) {
      arr.push(matrix[rowSt][i]);
    }
    rowSt++;

    for (let i = rowSt; i <= rowEnd; i++) {
      arr.push(matrix[i][colEnd]);
    }
    colEnd--;

    for (let i = colEnd; i >= colSt; i--) {
      arr.push(matrix[rowEnd][i]);
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowSt; i--) {
      arr.push(matrix[i][colSt]);
    }
    colSt++;
    
  }
  return arr;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralMatrix(matrix))