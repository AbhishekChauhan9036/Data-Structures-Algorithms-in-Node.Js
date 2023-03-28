// https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/

function preorder(root, ans=[]) {
    if (!root) return ans;
    ans.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
        preorder(root.children[i], ans);
    }
    return ans;
};