class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        pascal_triangle = list()
        for i in range(numRows):
            curr_row = [1 for _ in range(i+1)]
            pascal_triangle.append(curr_row)
            # Only sums at i > 1
            if (i > 1):
                # [x][y] -> [x][len-1]:
                for j in range(1,len(curr_row)-1):
                    #  [x-1][y-1] + [x-1][y]  
                    curr_row[j] = pascal_triangle[i-1][j-1] + pascal_triangle[i-1][j]
        return pascal_triangle

sol = Solution()
print(sol.generate())