// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

var kthSmallest = function(root, k,ans=[]) {
    if(!root || ans.length > k)return;
        kthSmallest(root.left,k,ans);
        ans.push(root.val); 
        kthSmallest(root.right,k,ans);
        return ans[k-1];
};