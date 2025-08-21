class Solution:
    def kthCharacter(self, k: int) -> str:
        word = "a"

        def helper(w):
            # abc -> abc + bcd
            shifted_w = ''
            for c in w:
                if (c == 'z'):
                    shifted_w += 'a'
                else:
                    shifted_w += chr(ord(c) + 1)
            return w + shifted_w

        if (k > 1):
            while (k >= len(word)):
                word = helper(word)
            return word[k-1]
        return word
