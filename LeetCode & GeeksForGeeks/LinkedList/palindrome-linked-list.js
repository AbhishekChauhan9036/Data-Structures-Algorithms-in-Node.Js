// https://leetcode.com/problems/palindrome-linked-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head == null) return true;
    let start = head,end = head,n=1;
    while (end.next != null ) {
        end.next.prev=end
        end=end.next;
        n++
    }

    for(let i=0;i< parseInt(n/2); i++ ) {
        if (start.val != end.val) return false
        start=start.next;
        end=end.prev;
    }   
    return true
}