/**
 * Leetcode 342: Power of Four
 * Topics: Math, Bit Manipulation, Recursion
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let powFour = 1;
    
    if (powFour == n) {
        return true;
    } else if (n <= 0) {
        return false;
    }

    while (powFour < n) {
        powFour *= 4;
        if (powFour == n) {
            return true;
        } else if (powFour > n) {
            return false;
        }
    }
};

// ======================== TEST CASES ========================

// Test Case 1:
console.log("Test Case 1 - n = 16:");
console.log("Expected: true");
console.log("Actual:  ", isPowerOfFour(16));
console.log();

// Test Case 2: 
console.log("Test Case 2 - n = 5:");
console.log("Expected: false");
console.log("Actual:  ", isPowerOfFour(5));
console.log();

// Test Case 3:
console.log("Test Case 3 - n = 1:");
console.log("Expected: true");
console.log("Actual:  ", isPowerOfFour(1));
console.log();
