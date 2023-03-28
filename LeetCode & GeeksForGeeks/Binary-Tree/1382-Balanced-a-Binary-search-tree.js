// https://leetcode.com/problems/balance-a-binary-search-tree/description/

var balanceBST = function(root) {
    let inorder = []
    traverse(root,inorder)
    return buildTree(inorder)
};
function traverse(root,arr){
    if(root){
        traverse(root.left,arr)
        arr.push(root.val)
        traverse(root.right,arr)
    }
}
function buildTree(arr){
    if(!arr.length) return null
    
    let mid = parseInt(arr.length / 2)
    let root = new TreeNode(arr[mid])
    root.left = buildTree(arr.slice(0,mid))
    root.right = buildTree(arr.slice(mid+1))
    return root
}