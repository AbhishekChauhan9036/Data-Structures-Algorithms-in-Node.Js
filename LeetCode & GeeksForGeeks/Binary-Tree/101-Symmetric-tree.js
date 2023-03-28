//https://leetcode.com/problems/symmetric-tree/description/

var isSymmetric = function(root,lRoot=root.left, rRoot=root.right) {
        if(lRoot==null && rRoot==null) return true; 
        if(!lRoot || !rRoot) return false;  
        if(lRoot.val != rRoot.val) return false; 
        return isSymmetric(root, lRoot.right, rRoot.left) && isSymmetric(root, lRoot.left, rRoot.right);
};
