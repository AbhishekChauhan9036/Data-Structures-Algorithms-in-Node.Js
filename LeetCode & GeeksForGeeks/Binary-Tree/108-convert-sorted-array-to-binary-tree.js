// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

const sortedArrayToBST = function (nums) {
    if (nums.length == 0) return null;
    const mid = parseInt(nums.length / 2);
    return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1)));
};