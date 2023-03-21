// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length;){
        if (i == 0 & target < nums[i]){
            return 0;
        }else if (target > nums[nums.length-1]){
            return nums.length;
        }else if (target > nums[i]){
            i++;
        }else if (target == nums[i]){
            return i;
        }else{
            return i;
        }
    }
};
