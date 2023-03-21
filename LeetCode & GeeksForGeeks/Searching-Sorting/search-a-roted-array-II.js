// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

var search = function(nums, target) {
    var low = 0;
    var high = nums.length-1;
    var mid = 0;
    var lowEq = false;
    var highEq = false;
    
    while(low <= high) {
        mid = parseInt((high - low)/2) + low;
        
        if( nums[mid] == target ) return true;
        
        lowEq = nums[low] == nums[mid];
        highEq = nums[mid] == nums[high];
        
        // if either of the end equates to mid
        if( lowEq || highEq ) {
            low += lowEq;
            high -= highEq;
        }
        // right side array is sorted
        else if( nums[mid] < nums[high] ) {
            // target is withing bounds of sorted right side
            if( target <= nums[high] && target > nums[mid] ) {
                low = mid+1;
            }
            else{
                high = mid-1;
            }
        }
        // left side array is sorted
        else {
            // target is within bounds of sorted left side
            if( target >= nums[low] && target < nums[mid] ) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
        
    }
    return false;
};