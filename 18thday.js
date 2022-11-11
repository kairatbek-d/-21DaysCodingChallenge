// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return dfs(root) == Infinity ? false : true;
}

var dfs = function(root) {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    if(Math.abs(left - right) > 1) return Infinity;
    
    return Math.max(left, right)+1;
}

// let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(3)));
let root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(2)), new TreeNode(3)), new TreeNode(2));
console.log(isBalanced(root = root));