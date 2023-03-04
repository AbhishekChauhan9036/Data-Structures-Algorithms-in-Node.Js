/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    var cnt=0;
    for(let i=1;i<s.length-1;i++){
        if(s[i-1]!=s[i] && s[i+1]!=s[i] && s[i+1]!=s[i-1]){
            cnt++;
        }
    }
    return cnt;
};
