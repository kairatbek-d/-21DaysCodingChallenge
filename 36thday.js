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
var removeElements = function(head, val) {
  
  while (head && head.val === val) {
    head = head.next;
  }

  let curr = head;
  while(curr && curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }

  return head;
};

let list = new ListNode(7);
list.next = new ListNode(7);
list.next.next = new ListNode(7);
list.next.next.next = new ListNode(7);

// let list = new ListNode(1);
// list.next = new ListNode(2);
// list.next.next = new ListNode(6);
// list.next.next.next = new ListNode(3);
// list.next.next.next.next = new ListNode(4);
// list.next.next.next.next.next = new ListNode(5);
// list.next.next.next.next.next.next = new ListNode(6);

console.log(removeElements(list, 6));