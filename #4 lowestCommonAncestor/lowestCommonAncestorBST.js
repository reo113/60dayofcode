/*
Given a binary search tree (BST), find the lowest common ancestor
 (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q 
as the lowest node in T that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8

Output: 6

Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4

Output: 2

Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:

Input: root = [2,1], p = 2, q = 1

Output: 2


*/


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const lowestCommonAnncestor = (root, p, q) => {
  if (root.val > p.val && root.val < q.val) {
    return root;
  } else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAnncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAnncestor(root.right, p, q);
  }
  return root;
};

const a = new Node(6);
const b = new Node(2);
const c = new Node(8);
const d = new Node(0);
const e = new Node(4);
const f = new Node(7);
const g = new Node(9);
const h = new Node(null);
const i = new Node(null);
const j = new Node(3);
const k = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;
e.left = j;
e.right = k;
