/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n==1)return true;
    if(n==0)return false;
    return isPowerOfFour(n/4);
};
