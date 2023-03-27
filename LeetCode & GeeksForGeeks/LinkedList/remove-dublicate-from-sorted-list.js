// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let newNode = new ListNode();
    let cur=newNode;
    while (head !== null) {
      if (!head.next || head.val !== head.next.val) {
        cur.next = head;
        cur = cur.next;
      }
      head = head.next;
    }
    return newNode.next;
    // T.C: O(N)
    // S.C: O(1)
  };