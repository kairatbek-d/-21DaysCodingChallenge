/**
 * Definition for singly-linked list.*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null){return false}
    let slow = head;
    let fast = head.next;
    
    while(!(fast === slow || fast === null || fast.next === null)){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast === slow){return true}
    return false;
};

let list = new ListNode(3);
list.next = new ListNode(2);
list.next.next = new ListNode(0);
list.next.next.next = new ListNode(-4);
list.next.next.next.next = list.next;

console.log(hasCycle(head = list));