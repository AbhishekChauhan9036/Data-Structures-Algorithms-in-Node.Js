
var topKFrequent = function(nums, k) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], m.get(nums[i]) + 1 || 1);
    }
    let arr = Array.from(m.entries());
    arr.sort((a,b) => b[1] - a[1]);
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[i][0]);
    }
    return res;

};


  // time O(N log(N))
  // Space O(N)
