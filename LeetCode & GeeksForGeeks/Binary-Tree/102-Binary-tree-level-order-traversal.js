//https://leetcode.com/problems/binary-tree-level-order-traversal/description/

var levelOrder=function(root,i=0,ans=[]){
    if(!root) return ans;
    if(ans[i]==null||undefined) ans[i]=[];
    ans[i].push(root.val);
    let temp=i+1;
    levelOrder(root.left,temp,ans);
    levelOrder(root.right,temp,ans);
    return ans;
}
