/**
 * Leetcode 326: Power of Three
 * Topics: Math, Recursion
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 0) {
        return false
    } else if (n == 1) {
        return true
    }

    let curPowThree = 3;

    while (curPowThree <= n) {
        if (curPowThree == n) {
            return true;
        }
        curPowThree = curPowThree * 3;
    }
    return false;
};

// ======================== TEST CASES ========================

// Test Case 1:
console.log("Test Case 1 - n = 27:");
console.log("Expected: true");
console.log("Actual:  ", isPowerOfThree("23"));
console.log();

// Test Case 2: 
console.log("Test Case 2 - n = 0:");
console.log("Expected: false");
console.log("Actual:  ", isPowerOfThree(""));
console.log();

// Test Case 3:
console.log("Test Case 3 - n = -1:");
console.log("Expected: false");
console.log("Actual:  ", isPowerOfThree("2"));
console.log();
