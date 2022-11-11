
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const output = [];
  
    if (root === null) {
        return output;
    }
    const stack = [];
    let curr = root;
    
    while (curr !== null || stack.length !== 0) {
        if (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            output.push(curr.val);
            curr = curr.right;  
        }  
    }
    
    return output;
};

let tree = new TreeNode(1, new TreeNode(null), new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root = tree));