// https://leetcode.com/problems/range-sum-of-bst/description/

const rangeSumBST =function(root, low, high){
    if (!root) return 0;
    let sum = 0;
    if (low <= root.val && root.val <= high) sum += root.val;
    if (root.left) sum += rangeSumBST(root.left, low, high);
    if (root.right) sum += rangeSumBST(root.right, low, high);
    return sum;
};