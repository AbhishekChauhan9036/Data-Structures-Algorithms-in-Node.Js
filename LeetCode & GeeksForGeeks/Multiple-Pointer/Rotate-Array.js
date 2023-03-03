/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var solve = function(nums,i,j){
    while(i < j){
        nums[i] = nums[i]^nums[j];
        nums[j] = nums[i]^nums[j];
        nums[i] = nums[i]^nums[j];
        i++;
        j--;
    }
} 
var rotate = function(nums, k) {
    k = k % nums.length;
    solve(nums, 0, nums.length-1);
    solve(nums, 0, k-1);
    solve(nums, k, nums.length-1);
};
