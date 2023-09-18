class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function dfs(root) {
  if (!root) return "x";
  let str = "";
  str += root.val;
  str += dfs(root.left);
  str += dfs(root.right);
  return str;
}

function serialize(root) {
  if (!root) return [];
  return dfs(root);
}
const node = new Node(
  1,
  new Node(2, new Node(3, null, null), null),
  new Node(6, null, null)
);
console.log(serialize(node));
