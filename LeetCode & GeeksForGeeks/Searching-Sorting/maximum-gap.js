// https://leetcode.com/problems/maximum-gap/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    var bump =0;
    var arr = nums.slice(0);
    arr.sort((a,b)=>a-b);
    for(var i=1;i<arr.length;i++){
      bump = Math.max(bump,arr[i]-arr[i-1]);
    }
    return bump;
};