/**
 * Definition for a binary tree node. */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root) return [];
  else if (root.left === null && root.right === null) return [`${root.val}`];
  else {
    let left = binaryTreePaths(root.left).map(x => root.val + '->' + x);
    let right = binaryTreePaths(root.right).map(x => root.val + '->' + x);

    return [...left, ...right];
  }
};

console.log(binaryTreePaths(new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3))));