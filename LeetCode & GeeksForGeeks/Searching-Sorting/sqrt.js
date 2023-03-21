// https://leetcode.com/problems/sqrtx/description/


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 1;
    let high = x;
    let ans = 0;
    while(low <= high) {
        const mid = parseInt((low+high)/2);
        const sq = mid*mid;
        if(sq === x) return mid;
        if(sq > x) high = mid-1;
        else {
            low = mid+1;
            ans = mid;
        }
    }
    return ans;
};