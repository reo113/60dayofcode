class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const balancedBinarytree = (root) => {
  function getheight(root) {
    if (root == null) return 0;

    const left = getheight(root.left);
    const right = getheight(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }
  if (root === null) return true;
  if (getheight(root) === -1) return false;
  return true;
};
