// https://leetcode.com/problems/delete-node-in-a-bst/description/

var deleteNode = function (root, key) {
    if (root == null) return null;
    if (root.val === key) {
      {
        if (!root.left || !root.right) return root.right || root.left;
        let leftSmallest = root.left;
        while (leftSmallest.right != null) leftSmallest = leftSmallest.right;
        leftSmallest.right = root.right;
        return root.left;
      }
    }
    if (root.val > key) {
      root.left = deleteNode(root.left, key);
    } else root.right = deleteNode(root.right, key);
  
    return root;
  };