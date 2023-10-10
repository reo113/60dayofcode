/* Problem 10: Number of Islands
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
 
Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3 */

const numOfIslands = (arr) => {
  if (!arr || arr.length === 0) return 0;
  const nr = arr.length;
  const nc = arr[0].length;
  let count = 0;

  const dfs = (r, c) => {
    // const queue = [];
    // queue.push([r, c]);
    // while (queue.length > 0) {
    //   const [r, c] = queue.shift();
    if (r < 0 || r >= nr || c < 0 || c >= nc || arr[r][c] === "0") {
      return;
    }
    arr[r][c] = "0";
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
    // queue.push([r - 1, c]);
    // queue.push([r + 1, c]);
    // queue.push([r, c - 1]);
    // queue.push([r, c + 1]);
    // }
  };

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (arr[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
};

const grid = [
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numOfIslands(grid));
