// https://leetcode.com/problems/decode-string/description/

var decodeString = function(s) {
    function dfs(i) {
        let ret = '';
        while (i < s.length && s[i] != ']') {
            if (s[i] < '0' || s[i] > '9') {
                ret += s[i++];
            } else {
                let multi = '';
                while (i < s.length && s[i] <= '9' && s[i] >= '0') {
                    multi += s[i++];
                }
                i++ 
                let [temp, newi] = dfs(i);
                i = newi;
                i++
                ret += temp.repeat(multi);
            }
        }
        
        return [ret, i];
    }
    return dfs(0)[0];
};