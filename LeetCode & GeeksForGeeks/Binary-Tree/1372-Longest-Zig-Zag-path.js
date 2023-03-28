// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/

var longestZigZag = function(root) {
    let max = 0;
    function findzig(direction,node){
        let left = 0;
        let right = 0;
        if(node.left != null)left = 1+findzig('right',node.left);
        if(node.right != null)right = 1+findzig('left',node.right);
        max = Math.max(max,left,right);
        return direction == 'left' ? left : right;
    }
    return Math.max(findzig('left',root),findzig('right',root),max);
};