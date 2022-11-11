
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
var postorderTraversal = function(root, arr=[]) {
  if(!root) return []
  arr=[...arr,...postorderTraversal(root.left)]
  arr=[...arr,...postorderTraversal(root.right)]
  arr.push(root.val)
  return arr
};

let tree = new TreeNode(1, new TreeNode(null), new TreeNode(2, new TreeNode(3)));
console.log(postorderTraversal(root = tree));