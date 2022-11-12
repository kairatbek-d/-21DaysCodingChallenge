/**
 * Definition for singly-linked list. */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let a = headA, b = headB;
  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  return a;
};

let listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = new ListNode(8);
listA.next.next.next = new ListNode(4);
listA.next.next.next.next = new ListNode(5);

let listB = new ListNode(5);
listB.next = new ListNode(6);
listB.next.next = new ListNode(1);
listB.next.next.next = new ListNode(8);
listB.next.next.next.next = new ListNode(4);
listB.next.next.next.next.next = new ListNode(5);

console.log(getIntersectionNode(listA, listB));