/* Given the head of a linked list, remove the nth node from the end of the list
 and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
 

Example 2:
Input: head = [1], n = 1
Output: []
 

Example 3:
Input: head = [1,2], n = 1
Output: [1] 
*/
class LinkedList {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
function getLen(head) {
  let count = 0;
  if (!head) return 0;
  let cur = head;
  while (cur) {
    count++;
    cur = cur.next;
  }
  return count;
}
function removeNthNodeOfEOL(head, n) {
  let len = getLen(head);
  let k = len - n;
  let i = 0;
  let prev = null;
  let cur = head;
  while (cur) {
    if (i === k) {
      if (prev) prev.next = cur.next;
      else return head.next
      return head;
    }
    prev = cur;
    cur = cur.next;
    i++;
  }
  return head;
}

let head = new LinkedList(
  1,
  new LinkedList(
    2,
    new LinkedList(3, new LinkedList(4, new LinkedList(5, null)))
  )
);
let ret = removeNthNodeOfEOL(head, 2);

while (ret) {
  console.log(ret.val);
  ret = ret.next;
}
