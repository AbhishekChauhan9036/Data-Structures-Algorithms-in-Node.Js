// https://leetcode.com/problems/backspace-string-compare/description/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const stack1 = [], stack2 = [];
    for (let i=0;i<S.length;i++) {
        if(S[i] == '#') stack1.pop();
        else stack1.push(S[i]);
    }
    for (let i=0;i<T.length;i++) {
        if(T[i] == '#')stack2.pop();
        else stack2.push(T[i]);
    }
    return stack1.join('') == stack2.join('');
};