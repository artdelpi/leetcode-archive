#include <vector>
using namespace std;

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        // 8290
        int carryOver = 0;
        for(int i=digits.size()-1; i>-1 ;i--) {
            // first addition
            if (i == digits.size()-1) {
                if (digits[i] == 9) {
                    digits[i] = 0;
                    carryOver++;
                } else {
                    // easiest scenario
                    digits[i]++;
                    return digits;
                }
            }

            if (carryOver > 0 &&
                i != digits.size()-1) {
                if (digits[i] == 9) {
                    digits[i] = 0;
                } else {
                    digits[i]++;
                    carryOver--; // reset
                }
            }
        } 
        // only triggers if carryOver lasts 'till the last elem
        if (carryOver == 1) {
            digits.insert(digits.begin(), 1);
        };
        return digits;
    }
};