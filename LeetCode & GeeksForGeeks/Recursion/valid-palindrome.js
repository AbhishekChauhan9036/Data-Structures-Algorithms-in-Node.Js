/**
 * @param {string} s
 * @return {boolean}
 */

/*
var isPalindrome = function(s) {
    s=s.toLowerCase();
    var str="";
    for(var i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z' || s[i]>='0' && s[i]<='9'){
            str+=s[i];
        }
    }

    if(str.length==0)return true;
    for(var i=0;i<str.length;i++){
        if(str[i]!=str[str.length-i-1]){
            return false;
        }
    }
    return true;

    // TC-O(n)
    // SC-O(n)
};
*/

var checkPalindrome= function(s,i,j){
    if(i >= j) return true;     
    return s[i] == s[j] && checkPalindrome(s, i+1, j-1);
}
var isPalindrome = function(s) {
    s=s.toLowerCase();
    var str="";
    for(var i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z' || s[i]>='0' && s[i]<='9'){
            str+=s[i];
        }
    }
    return checkPalindrome(str,0,str.length-1);
};





