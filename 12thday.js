/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while (n > 0) {
        if (m >= 0 && nums1[m - 1] > nums2[n - 1]) nums1[m + n - 1] = nums1[--m]
        else nums1[m + n - 1] = nums2[--n]
    }

    // nums1.splice(m);
    // for (let i = 0; i < n; i++) {
    //     nums1[nums1.length] = [nums2[i]];
    // }
    // nums1.sort((a,b) => a - b);
};

console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));
console.log(merge(nums1 = [1], m = 1, nums2 = [], n = 0));
console.log(merge(nums1 = [0], m = 0, nums2 = [1], n = 1));