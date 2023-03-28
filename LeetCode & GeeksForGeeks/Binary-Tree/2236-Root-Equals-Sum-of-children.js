// https://leetcode.com/problems/root-equals-sum-of-children/

var checkTree = function(root) {
    if(root!=null){
        return root.val==(root.left.val+root.right.val);
    }
};