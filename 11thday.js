/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let seen = false;
    
    let node = head;
    while (node) {
        if(seen && (seen.val === node.val)) {
            seen.next = node.next;
        } else {
            seen = node;
        }

        node = node.next;
    }
    return head;
};

let list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(3);
list.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(head = list));