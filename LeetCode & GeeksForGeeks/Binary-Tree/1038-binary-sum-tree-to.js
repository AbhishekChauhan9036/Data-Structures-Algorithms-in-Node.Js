// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/

function bstToGst(root) {
    dfs(root, 0);
    return root;
}

function dfs(root, right) {
    if (!root) return right;
    root.val += dfs(root.right, right);
    return dfs(root.left, root.val);
}