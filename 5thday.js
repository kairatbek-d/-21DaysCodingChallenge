/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let tail = head;
    if (head === null) return head;
    let len = 1;
    while (tail.next) {
        tail = tail.next;
        len++;
    }
    tail.next = head;
    let count = len - (k % len);
    while (count > 0) {
        head = head.next;
        tail = tail.next;
        count--;
    }
    tail.next = null;
    return head;

    // if (!head || !head.next || !k) return head;
    // const list = [];
    // let len = 0;
    // // put linked list into array
    // for (let cur = head; cur; cur = cur.next) {
    //     list[len++] = cur;
    // }
    // // calculate the break position
    // const newHead = len - (k % len);
    // if (newHead === len) return head;
    // // change pointer
    // list[len - 1].next = head;
    // list[newHead - 1].next = null;
    // return list[newHead];
};

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(rotateRight(head = list, k = 2));