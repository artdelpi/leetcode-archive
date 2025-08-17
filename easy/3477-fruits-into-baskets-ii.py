class Solution:
    def numOfUnplacedFruits(self, fruits, baskets) -> int:
        unplaced = 0
        fruit_placed = False

        for f in fruits:
            for b in baskets:
                if (f <= b and not fruit_placed):
                    baskets.remove(b)
                    fruit_placed = True
            if (not fruit_placed):
                unplaced += 1
            fruit_placed = False # restarts
        return unplaced

solution = Solution()
print(solution.numOfUnplacedFruits([4,2,5], [3,5,4]))