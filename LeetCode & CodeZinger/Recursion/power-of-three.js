/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==1)return 1;
    if(n==0)return 0;
    return isPowerOfThree(n/3);
};
