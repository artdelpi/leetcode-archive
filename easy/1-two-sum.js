/**
 * Leetcode 1: Two Sum
 * Topics: Array, Hash Table
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length;j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

// ======================== TEST CASES ========================

// Test Case 1:
console.log("Test Case 1 - [2,7,11,15], target = 9:");
console.log("Expected: [0,1]");
console.log("Actual:  ", twoSum([2,7,11,15], 9));
console.log();

// Test Case 2:
console.log("Test Case 2 - nums = [3,2,4], target = 6:");
console.log("Expected: [1,2]");
console.log("Actual:  ", twoSum([3,2,4], 6));
console.log();

// Test Case 3: 
console.log("Test Case 3 - nums = [3,3], target = 6:");
console.log("Expected: [0,1]");
console.log("Actual:  ", twoSum([3,3], 6));
console.log();
