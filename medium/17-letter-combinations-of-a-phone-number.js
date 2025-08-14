/**
 * Leetcode 17: Letter Combinations of a Phone Number
 * Topics: Hash Table, String, Backtracking
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    numMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    // "234" -> [
    //          ["a", "b", "c"],
    //          ["d", "e", "f"],
    //          ["g", "h", "i"]
    //          ]
    let auxArr = [];
    for (let i=0; i<digits.length; i++) {
        let bufferArr = [];
        let numStr = numMap[digits[i]];
        for (let j=0; j<numStr.length; j++) {
            bufferArr.push(numStr[j]);
        }
        auxArr.push(bufferArr);
    }
    // ['a', 'b'], ['c', 'd'] -> ['ac', 'ad', 'bc', 'bd']
    function combineChars(arr1, arr2) {
        let arr = [];

        for (let i=0; i<arr1.length; i++) {
            for (let j=0; j<arr2.length; j++) {
                arr.push(arr1[i] + arr2[j]);
            }
        }
        return arr;
    }
    
    if (digits.length == 1) {
        return auxArr[0];
    }

    let accumulatedArray = [];

    for (let i=0; i<digits.length-1; i++) {
        if (i == 0) {
            accumulatedArray = combineChars(auxArr[i], auxArr[i+1])
        } else {
            accumulatedArray = combineChars(accumulatedArray, auxArr[i+1]);
        }
    }
    return accumulatedArray;
};

// ======================== TEST CASES ========================

// Test Case 1:
console.log("Test Case 1 - digits = '23':");
console.log('Expected: ["ad","ae","af","bd","be","bf","cd","ce","cf"]');
console.log("Actual:  ", letterCombinations("23"));
console.log();

// Test Case 2:
console.log("Test Case 2 - digits = '':");
console.log("Expected: []");
console.log("Actual:  ", letterCombinations(""));
console.log();

// Test Case 3:
console.log("Test Case 3 - digits = '2':");
console.log("Expected: ['a','b','c']");
console.log("Actual:  ", letterCombinations("2"));
console.log();
