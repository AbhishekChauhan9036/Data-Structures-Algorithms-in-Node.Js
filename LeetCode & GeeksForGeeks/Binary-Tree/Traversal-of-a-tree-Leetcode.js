//https://leetcode.com/problems/binary-tree-inorder-traversal/description/
var inorderTraversal = function(root, ans = []) {
    if(!root) return ans;
    inorderTraversal(root.left, ans)
    ans.push(root.val)
    inorderTraversal(root.right, ans)
    return ans;
};



//https://leetcode.com/problems/binary-tree-postorder-traversal/
var postorderTraversal = function(root,ans=[]) {
    if(!root)return ans;
    postorderTraversal(root.left,ans);
    postorderTraversal(root.right,ans);
    ans.push(root.val);
    return ans;
};


//https://leetcode.com/problems/binary-tree-preorder-traversal/description/a
var preorderTraversal = function(root,ans=[]) {
    if(!root)return ans;
    ans.push(root.val);
    preorderTraversal(root.left,ans);
    preorderTraversal(root.right,ans);
    return ans;
};
s
