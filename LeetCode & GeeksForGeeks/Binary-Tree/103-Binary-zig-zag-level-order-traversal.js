//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/s

var zigzagLevelOrder = function(root,i=0,ans=[]) {
    if(!root)return ans;
    if(ans[i]==null||undefined)ans[i] = [];
    !ans.length && ans[i].push(root.val);
    ans.length && i % 2 == 0? ans[i].push(root.val): ans[i].unshift(root.val)
    root.left && zigzagLevelOrder(root.left,i+1,ans)
    root.right && zigzagLevelOrder(root.right,i+1,ans)
    return ans;
};
