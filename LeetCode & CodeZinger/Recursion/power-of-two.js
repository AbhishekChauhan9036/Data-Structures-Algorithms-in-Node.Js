/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1)return 1;
    if(n==0)return 0;
    return isPowerOfTwo(n/2)
};
