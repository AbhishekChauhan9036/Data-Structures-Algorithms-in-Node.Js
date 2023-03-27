// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let t1 = head, t2 = head;
    for (let i = 0; i < n; i++) {
        t1 = t1.next
    }
    if (t1 == null) {
        return head.next
    }
    while (t1.next != null) {
        t1 = t1.next
        t2 = t2.next
    }
    t2.next = t2.next.next
    return head
};