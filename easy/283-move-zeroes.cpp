class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        vector<int> res_vec = {};
        int num_zeroes = 0;
        for (int i=0; i<nums.size(); i++) {
            if (nums[i] != 0) {
                res_vec.push_back(nums[i]);
            } else {
                num_zeroes++;
            }
        }
        for (int i=0; i<num_zeroes; i++) {
            res_vec.push_back(0);
        }
        nums = res_vec;
    }
};