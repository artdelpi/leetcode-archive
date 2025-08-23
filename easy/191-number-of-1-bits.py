class Solution:
    def hammingWeight(self, n: int) -> int:
        n_bin = str(bin(n))
        set_bits = 0
        # Skips "0b" from bin type
        for bit in n_bin[2:]:
            if (bit == '1'):
                set_bits += 1
        return set_bits


if (__name__ == "__main__"):
    sol = Solution()
    n = 11
    print(sol.hammingWeight(n))