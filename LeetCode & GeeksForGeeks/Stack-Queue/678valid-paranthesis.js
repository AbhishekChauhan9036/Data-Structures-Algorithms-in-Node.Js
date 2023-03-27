// https://leetcode.com/problems/valid-parenthesis-string/description/
var checkValidString = function (s) {
    let min = 0, max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            min++;
            max++;
        }
        if (s[i] == ')') {
            min--;
            max--;

        }
        if (s[i] == '*') {
            min--;
            max++;

        }
        if (min < 0) {
            min = 0
        }
        if (max < 0) {
            return false;
        }

    }
    if (min == 0 || max == 0) {
        return true;
    }
    else {
        return false;
    }
};