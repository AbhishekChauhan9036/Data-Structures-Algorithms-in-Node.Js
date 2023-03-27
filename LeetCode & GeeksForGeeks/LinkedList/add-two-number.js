// https://leetcode.com/problems/add-two-numbers/description/


var addTwoNumbers = function (l1, l2, c = 0) {
    if (!l1 && !l2 && c == 0) return null;

    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;
    let sum = a + b + c;
    c = sum > 9 ? 1 : 0;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
    return new ListNode(sum % 10, addTwoNumbers(l1, l2, c));
};