# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sortedArrayToBST(self, nums: list) -> TreeNode:
        # MIDDLE, left = left_sub_array_middle, right = right_sub_array_middle
        # node.val = middle
        # node.left = left_subarray_middle
        # node.right = right_subarray_middle
        def helper(arr):
            if (not arr):
                return 
            elif (len(arr) == 1):
                return TreeNode(val=arr[0])
            
            middle_index = (len(arr)-1)//2
            middle = arr[middle_index]

            return TreeNode(val=middle,
                            left=helper(arr[:middle_index]),
                            right=helper(arr[middle_index+1:]))
        return helper(nums)



if (__name__ == "__main__"):
    sol = Solution()
    nums = [-10,-3,0,5,9]
    print(sol.sortedArrayToBST(nums))
        