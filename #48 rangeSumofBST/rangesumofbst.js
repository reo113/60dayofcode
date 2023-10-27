// Given the root node of a binary search tree and two integers low and high, 
// return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example 1:
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function rangeSumOfBST(root, low, high) {
    if (root === null) return 0
    if (root.val < low) return rangeSumOfBST(root.right, low, high) 
    else if (root.val > high) return rangeSumOfBST(root.left, low, high) 
    if (root.val >= low && root.val <= high) {
        return rangeSumOfBST(root.left, low, high) + rangeSumOfBST(root.right, low, high) + root.val
    }

}

const root1 = new TreeNode(10);
root1.left = new TreeNode(5);
root1.right = new TreeNode(15);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(7)
root1.right.right = new TreeNode(18);

console.log(rangeSumOfBST(root1, 7, 15))