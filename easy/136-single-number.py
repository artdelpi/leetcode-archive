class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        hmap_seen = {}

        for n in nums:
            if (n not in hmap_seen):
                hmap_seen[n] = 1
            else:
                hmap_seen[n] += 1
        
        for n in hmap_seen:
            if (hmap_seen[n] == 1):
                return n