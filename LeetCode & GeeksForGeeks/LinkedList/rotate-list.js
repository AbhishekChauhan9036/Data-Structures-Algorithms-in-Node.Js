// https://leetcode.com/problems/rotate-list/description/

var rotateRight = function (head, k) {
    let l = 0;
    let temp = head;
    while (temp) {
        l++;
        temp = temp.next;
    }
    l = k % l;

    if (l === 0 || !head) return head;

    let slow = head;
    let fast = head;

    for (let i = 0; i < l; i++) {
        fast = fast.next;
    }

    while (fast.next) {

        fast = fast.next;
        slow = slow.next;
    }
    let prev = slow.next;
    slow.next = null;
    fast.next = head;

    return prev;

};