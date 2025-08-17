class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        power = 1 # n^0
        while power <= n:
            if (power == n):
                return True
            power *= 2
        return False

sol = Solution()
print(sol.isPowerOfTwo(0))