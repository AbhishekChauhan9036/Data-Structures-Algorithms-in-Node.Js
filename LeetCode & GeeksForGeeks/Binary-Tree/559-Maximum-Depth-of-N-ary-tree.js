// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/

var maxDepth = function(root) {
    var depth = 0;
      if (root == null)return depth;
      for (let n of root.children){
          depth = Math.max(depth, maxDepth(n));
      }
      return depth+1;
  };