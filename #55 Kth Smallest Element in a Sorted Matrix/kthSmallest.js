// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).



// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

// Example 2:
// Input: matrix = [[-5]], k = 1S
// Output: -5


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
class MinHeap {

  constructor() {
    this.heap = [];
  }

  sortFn(a, b) {
    if (a.val > b.val) return 1;
    if (a.val === b.val) return 0;
    if (a.val < b.val) return -1;
  }

  add(val, colNum, row) {
    this.heap.push({ val, colNum, row });
    this.heap.sort(this.sortFn);
  }
  extract = () => this.heap.shift();
  size = () => this.heap.length;
  peek = () => this.heap[0];
}

function kthSmallest(matrix, k) {
  let heap = new MinHeap();

  for (let i = 0; i < Math.min(k, matrix.length); i++) {
    heap.add(matrix[i][0], 0, matrix[i]);
  }

  let numberCount = 0;
  let number;

  while (heap.size() > 0) {
    let { val, colNum, row } = heap.peek();
    heap.extract();
    numberCount++;
    number = val;

    if (numberCount === k) {
      break;
    }

    if (row.length > colNum + 1) {
      heap.add(row[colNum + 1], colNum + 1, row);
    }
  }

  return number;
};

let matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8
console.log(kthSmallest(matrix, k - 1))
