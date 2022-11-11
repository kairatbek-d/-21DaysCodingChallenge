// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;

    let left = minDepth(root.left);
    let right = minDepth(root.right);
    
    return (left == 0 || right == 0) ? left + right + 1 : Math.min(left, right)+1;    
};

let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// let root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(2)), new TreeNode(3)), new TreeNode(2));
console.log(minDepth(root = root));