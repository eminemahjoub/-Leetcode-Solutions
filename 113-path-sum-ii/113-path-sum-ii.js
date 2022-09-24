/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const resultArray = [];
    
    function traverse(node, arr, sum) {
        if(!node) {
             return null
        }
        
        arr.push(node.val);
        sum+=node.val;
        
        if(node.left == null && node.right == null) {
            if(targetSum === sum) {
                resultArray.push([...arr]);
                return;
            }
        }
        
        if(traverse(node.left, arr, sum) !== null) {
             arr.pop()
        }
        if(traverse(node.right, arr, sum) !== null) {
            arr.pop();
        }
        
    }
    
    traverse(root, [], 0)
    return resultArray;

    
};