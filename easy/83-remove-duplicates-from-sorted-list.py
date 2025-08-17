# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        seen = []
        tail = head

        while tail:
            if (tail.val not in seen):
                seen.append(tail.val)
            tail = tail.next
        
        res = ListNode()
        res_head = res

        tail = head
        while tail:
            if (tail.val in seen):
                seen.remove(tail.val)
                res.next = tail
                res = res.next
            tail = tail.next
        
        res.next = None
        return res_head.next
