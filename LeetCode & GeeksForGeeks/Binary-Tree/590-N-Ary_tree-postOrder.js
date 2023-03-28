// https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/

var postorder = function(root,ans=[]) {
    if (!root) return ans;
    for (let i = 0; i < root.children.length; i++) {
        postorder(root.children[i], ans);
    }
    ans.push(root.val);
    return ans;
};