// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1: <picture of linked list>


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100



//solution
// var middleNode = function(head) {
//     return Math.floor(head.length / 2)+1;
// };

// i guess i don't know how linked lists work lol
// this solution works for an array tho so im not that dumb. lol find the middle of an array?
//needed much help for this one

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

var middleNode = function(head) {
    let twice = head;
    let once = head;
    while(twice && twice.next){
        twice = twice.next.next;
        once = once.next
    }
    return once// is equal to once.next at this point so it is 4 instead of 3
};
//not my code, but i do understand the solution i think

