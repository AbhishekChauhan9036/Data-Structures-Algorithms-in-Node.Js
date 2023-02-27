/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     var n=nums.length;
        var st=1;
        var end=1;
        var res=new Array(nums.length).fill(1);
        for(var i=0;i<n;i++){
            res[i]*=st;
            st*=nums[i];
            res[n-1-i]*=end;
            end*=nums[n-1-i];
        }
        return res;
};
