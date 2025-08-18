class Solution:
    def fib(self, n: int) -> int:
        # 0 1 1 2 3 
        # fib(n) = fib(n-1) + fib(n-2)
        # base case: n == 0, n == 1
        if (n == 0):
            return 0
        elif (n == 1):
            return 1
        # recursive leap-of-faith
        return self.fib(n-1) + self.fib(n-2)
