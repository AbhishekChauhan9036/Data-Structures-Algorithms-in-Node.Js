// link:- https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const ans = [];
    if(nums1.length === 0 || nums2.length === 0) {
        return [];
    }
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            ans.push({pair: [nums1[i], nums2[j]], sum: (nums1[i] + nums2[j])});
        }
    }
    ans.sort((a, b) => (a.sum - b.sum));
    const out = [];
    for(let i = 0; (i < k && i < ans.length); i++) {
        out.push(ans[i].pair);
    }
    return out;
};