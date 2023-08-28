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
