/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 /*
var containsNearbyDuplicate = function(nums, k) {
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j] && Math.abs(i-j)<=k){
                return true;
            }
        }
    }
    return false;
};*/


var containsNearbyDuplicate = function(nums, k) {
    const s1 = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (s1.has(nums[i])){
            return true;
        }
        s1.add(nums[i]);
        if (k < s1.size){
            s1.delete(nums[i-k]);
        }
    }
    return false;
};
