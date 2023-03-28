// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/

var getTargetCopy = function (original, cloned, target) {
    if (original == null) return null;
    if (original == target) return cloned;
    else {
        return getTargetCopy(original.left, cloned.left, target) ||
            getTargetCopy(original.right, cloned.right, target);
    }
};