# include <vector>
using namespace std;

class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        // 1 index counter for each vector. 
        // The smallest num gets put into the result
        int nums1_i = 0;
        int nums2_i = 0;
        vector<int> res_arr = {};
        
        for(int i=0; i<m+n; i++) {
            // Checks if possible w/ nums2
            if (nums2_i >= n) {
                res_arr.push_back(nums1[nums1_i]);
                nums1_i++;
            } else if (nums1_i >= m) {
                res_arr.push_back(nums2[nums2_i]);
                nums2_i++;
            } else {
                if (nums1[nums1_i] > nums2[nums2_i]) {
                    res_arr.push_back(nums2[nums2_i]);
                    nums2_i++;
                } else {
                    res_arr.push_back(nums1[nums1_i]);
                    nums1_i++;
                }
            }
        }
        nums1 = res_arr;
    }
};