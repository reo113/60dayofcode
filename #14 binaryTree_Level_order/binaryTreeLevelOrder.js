/* Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
 
Example 2:
Input: root = [1]
Output: [[1]]
 
Example 3:
Input: root = []
Output: [] */
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const binaryTreelevelOrder = (root) => {
  let queue = [root[0]];
  let arr = [];
  let i = 0;

  while (queue.length > 0 && i < root.length) {
    let cur = queue.shift();
    if (cur !== null && cur != undefined) arr.push(cur);
    if (root[2 * i + 1] !== null) queue.push(root[2 * i + 1]);
    if (root[2 * i + 2] !== null) queue.push(root[2 * i + 2]);
    i++;
  }

  return arr;
  // while (queue.length > 0) {
  //   let cur = queue.shift();
  //   if (cur != null) arr.push(cur.val);
  //   if (cur.left) queue.push(cur.left);
  //   if (cur.right) queue.push(cur.right);
  // }
  // return arr;
};
const root = [3, 9, 20, null, null, 15, 7];
const node = new Node(
  3,
  new Node(9, null, null),
  new Node(20, new Node(15, null, null), new Node(7, null, null))
);
console.log(binaryTreelevelOrder(root));
