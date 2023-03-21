// problem link:- https://leetcode.com/problems/insert-interval/description/

var insert = function(intervals, newInterval) {
    const result = [];
    const length = intervals.length;
    let i = 0;
    while(i < length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    console.log(i);
    while(i < length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    
    while(i < length) {
        result.push(intervals[i]);
        i++;
    }
    return result;
};