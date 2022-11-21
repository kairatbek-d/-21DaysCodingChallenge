/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

  /**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  
  let prev = null;
  let next = null;
  let current = head;
  while(current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(reverseList(list));