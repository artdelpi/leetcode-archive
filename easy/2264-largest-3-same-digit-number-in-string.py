class Solution:
    def largestGoodInteger(self, num: str) -> str:
        good_integers = []
        for i in range(len(num)-2):
            if (num[i] == num[i+1] and
                num[i+1] == num[i+2]):
                good_integers.append(int(num[i]+num[i+1]+num[i+2]))
        if (good_integers):
            biggest_good_integer =  str(max(good_integers))
            if (biggest_good_integer == "0"):
                return "000"
            else:
                return biggest_good_integer
        else:
            return ""

sol = Solution()
print(sol.largestGoodInteger("232220002"))