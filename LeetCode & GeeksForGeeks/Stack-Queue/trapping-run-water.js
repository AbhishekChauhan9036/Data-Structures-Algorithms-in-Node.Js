// https://leetcode.com/problems/trapping-rain-water/description/

var trap = function(heights) {
	if (heights === null || heights.length === 0) {
		return 0;
	}
    let trapped = 0, low = 0, high = heights.length-1;
    let leftMax = 0, rightMax = 0;
    while (low < high) {
        if (heights[low] <= heights[high]) { 
            if (leftMax > heights[low]) trapped += leftMax - heights[low];
            else leftMax = heights[low];
            low++;
        } else {
            if (rightMax > heights[high]) trapped += rightMax - heights[high];
            else rightMax = heights[high];
            high--;
        }
    }
    return trapped;
    // Two Pointer
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}