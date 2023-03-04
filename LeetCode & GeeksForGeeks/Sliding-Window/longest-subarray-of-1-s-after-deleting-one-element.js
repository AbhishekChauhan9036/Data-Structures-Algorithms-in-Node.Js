/**
 * @param {number[]} nums
 * @return {number}
 */

var longestSubarray = function (nums) {
    let max = 0;
    let left = 0;
    let right = 0;
    let zero = 0;

    while (right < nums.length) {
        if (nums[right] == 0) {
            zero++;
        }

        while (zero > 1) {
            if (nums[left] == 0) {
                zero--;
            }
            left++;
        }
        max = Math.max(max,right-left);
        right++;
    }
    return max;
};
