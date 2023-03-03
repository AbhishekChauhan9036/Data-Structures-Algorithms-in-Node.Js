
var frequencySort = function(s) {
  const map = {};
  for(let i = 0 ; i< s.length; i++) {
    map[s[i]] = map[s[i]] + 1 || 1;
  }
  s = s.split('')
  s.sort((a, b) => map[b]-map[a] || a < b && 1 || -1);
  return s.join('');
};



// T.C-O(N)
// S.C-O(N)
