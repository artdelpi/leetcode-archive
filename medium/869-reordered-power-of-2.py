class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        def get_combinations(l):
            if (len(l) == 0):
                return [[]]
            cs = []
            for c in get_combinations(l[1:]):
                cs += [c, c+[l[0]]]
            return cs

        def is_power_of_two(n):
            if (n > 0):
                pow = 1
                while n <= pow:
                    if (n == pow):
                        return True
                    pow *= 2
                return False
            else:
                return False

        combinations = get_combinations(list(str(n)))
        has_power_of_two = False
        num_size = len(str(n))
        print(combinations)

        for c in combinations:
            num_str = ""
            for num in c:
                num_str += num
            # Padding to check if MS Number is 0
            while num_size > len(num_str):
                num_str = '0' + num_str
            print(num_str)
            if (num_str and num_str[0] != '0'):
                num_int = int(num_str)
                print(num_int)
                if (is_power_of_two(num_int)):
                    return True
        return False

solution = Solution()
print(solution.reorderedPowerOf2(16))