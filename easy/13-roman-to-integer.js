/**
 * Leetcode 13: Roman to Integer
 * Topics: Hash Table, Math, String
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let tot = 0;
    numeral_mapping = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i=0; i<s.length; i++) {
        tot += numeral_mapping[s[i]];
        // not first symbol
        if (i > 0) {
            if (s[i] == "V" || s[i] == "X") {
                if (s[i-1] == "I") {
                    tot -= 2*numeral_mapping["I"] // accounts for adding "I" up before
                }
            } else if (s[i] == "L" || s[i] == "C") {
                if (s[i-1] == "X") {
                    tot -= 2*numeral_mapping["X"];
                } 
            } else if (s[i] == "D" || s[i] == "M") {
                if (s[i-1] == "C") {
                    tot -= 2*numeral_mapping["C"];
                }
            }
        }
    }
    return tot;
};

// ======================== TEST CASES ========================

// Test Case 1:
console.log("Test Case 1 - s = 'III'");
console.log("Expected: 3");
console.log("Actual:  ", romanToInt("III"));
console.log();

// Test Case 2: 
console.log("Test Case 2 - s = 'LVIII':");
console.log("Expected: 58");
console.log("Actual:  ", romanToInt("LVIII"));
console.log();

// Test Case 3: 
console.log("Test Case 3 - 'MCMXCIV':");
console.log("Expected: 1994");
console.log("Actual:  ", romanToInt("MCMXCIV"));
console.log();
