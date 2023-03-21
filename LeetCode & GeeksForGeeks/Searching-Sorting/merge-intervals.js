// problem link:- https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) {
        return [];
    }
    intervals.sort((a, b) => a[0]-b[0]);
    const result = [intervals[0]];
    for(let i = 1; i < intervals.length; i++) {
        const len = result.length;
        if(result[len-1][1] < intervals[i][0]) {
            result.push(intervals[i]);
        } else {
            result[len-1][1] = Math.max(result[len-1][1], intervals[i][1]);
        }
    }
    return result;
};