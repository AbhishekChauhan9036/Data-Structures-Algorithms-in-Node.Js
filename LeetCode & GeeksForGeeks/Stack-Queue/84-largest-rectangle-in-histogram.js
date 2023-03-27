// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length, stack = [], height, width, ans = 0;
    for (let i = 0; i <= n; i += 1) {
        while (stack.length > 0 && (i == n || heights[stack[stack.length - 1]] >= heights[i])) {
            height = heights[stack[stack.length - 1]];
            stack.pop();
            width = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
            ans = Math.max(ans, width * height);
        }
        stack.push(i);
    }
    return ans;
    //   TC & SC-O(N)
};