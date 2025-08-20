#include <vector>
using namespace std;

class Solution {
public:
    void reverseString(vector<char>& s) {
        // i <-> j
        // i = 0...     (i++)
        // j = len-1... (j--)
        int j = s.size() - 1; // last index char

        for (int i=0; i<s.size()/2; i++) {
            // In place swap
            char buffer;
            buffer = s[i];
            s[i] = s[j];
            s[j] = buffer;
            j--;
        };
        // no return, only update s in-place
    }
};