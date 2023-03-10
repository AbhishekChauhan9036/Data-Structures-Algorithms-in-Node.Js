/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0 && s.length === 0) return true;
  if (p[1] === '*') {
    for (let i = 0; i < s.length && (p[0] === '.' || p[0] === s[i]); i++) {
      if (isMatch(s.slice(i + 1), p.slice(2))) return true;
    }
    return isMatch(s, p.slice(2));
  }
  return s.length && (p[0] === '.' || s[0] === p[0]) && isMatch(s.slice(1), p.slice(1));
};
