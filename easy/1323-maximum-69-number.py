class Solution:
    def maximum69Number (self, num: int) -> int:
        num_str = list(str(num))
        biggest_num = num

        # Simply invert the first 6, if any
        for i in range(len(num_str)):
            if (num_str[i] == '6'):
                num_str[i] = '9'
                return int("".join(num_str))
        return biggest_num

sol = Solution()
print(sol.maximum69Number(9669))