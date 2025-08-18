/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let k = 0;

  if (m === 0) {
    for (let i = 0; i < n; i++) nums1[i] = nums2[i];
    return;
  } else if (n === 0) {
    return;
  }

  const lowestNumIndex = (arr) => {
    let lowest = Infinity;
    let lowestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < lowest) {
        lowest = arr[i];
        lowestIndex = i;
      }
    }
    return lowestIndex;
  };

  for (let i = 0; i < nums1.length; i++) {
    const li = lowestNumIndex(nums2);
    if (k < m && nums1[k] <= nums2[li]) {
      k++;
    } else {
      if (k < m) {
        let temp = nums1[k];
        nums1[k] = nums2[li];
        nums2[li] = temp;
        k++;
      } else {
        nums1[k] = nums2[li];
        nums2[li] = Infinity; 
        k++;
      }
    }
  }
};

console.log(merge([0], 0, [1], 1));