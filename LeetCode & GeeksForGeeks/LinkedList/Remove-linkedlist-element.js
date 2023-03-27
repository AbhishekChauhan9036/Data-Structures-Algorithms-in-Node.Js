// https://leetcode.com/problems/remove-linked-list-elements/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newNode = new ListNode();
    let cur = newNode;
    
    while (head !== null) {
        if (head.val !== val) {
            cur.next = head;
            cur = cur.next;
        }
        head = head.next;
    }
    cur.next = null;
    return newNode.next;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};