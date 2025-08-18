/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = [];
    let slowIndex = 0;
    let k = 0;
    
    for (let i=0; i<nums.length; i++) {
        if (!(seen.includes(nums[i]))) {
            seen.push(nums[i]);
            nums[slowIndex] = nums[i];
            slowIndex++;
            k++;
        }
    }
    return k;
};

console.log(removeDuplicates([1,1,2]));