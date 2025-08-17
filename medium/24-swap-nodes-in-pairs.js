/**
 * Leetcode 24: Nodes in Pairs
 * Topics: Linked List, Recursion
 */

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

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)}

var swapPairs = function(head) {
    let ptr = head; // ptr will end as the last node; gotta return the 1st
    while (ptr != null && ptr.next != null) {
        let aux = ptr.val;
        ptr.val = ptr.next.val;
        ptr.next.val = aux;
        ptr = ptr.next.next; // skip the next node
    }
    return head;
};

// ======================== TEST CASES ========================

// Test Case 1:
console.log("Test Case 1 - head = []:");
console.log("Expected: []");
console.log("Actual:  ", swapPairs([]));
console.log();

// Test Case 2: 
console.log("Test Case 2 - head = [1]:");
console.log("Expected: [1]");
console.log("Actual:  ", swapPairs([1]));
console.log();

// Test Case 3:
console.log("Test Case 3 - head = [1,2,3]:");
console.log("Expected: [2,1,3]");
console.log("Actual:  ", swapPairs([1,2,3,4]));
console.log();
