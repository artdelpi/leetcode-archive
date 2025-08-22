class Solution:
    def minimumArea(self, grid: List[List[int]]) -> int:
        lowest_x, highest_x = len(grid[0]), -1
        lowest_y, highest_y = len(grid), -1

        # Find delta x: first absciss occurence 'till last
        for row in grid:
            # Find lowest_x and highest_x
            for i in range(len(row)):
                if (row[i] == 1):
                    if (i < lowest_x):
                        lowest_x = i
                    if (i > highest_x):
                        highest_x = i

        # Each row gets an index
        for i in range(len(grid)):
            if (1 in grid[i]):
                if (i < lowest_y):
                    lowest_y = i
                if (i > highest_y):
                    highest_y = i

        # Height = highest y occurence - lowest y occurence
        height = (highest_y - lowest_y) + 1

        # Width = highest x occurence - lowest x occurence
        width = (highest_x - lowest_x) + 1
        return height * width


if (__name__ == "__main__"):
    sol = Solution()
    grid = [[0,1,0],[1,0,1]]
    print(sol.minimumArea(grid))
