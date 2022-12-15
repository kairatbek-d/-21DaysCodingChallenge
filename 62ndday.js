/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // nums1 = new Set(nums1);
    
    // return nums2.filter(num => nums1.delete(num));
    
    let mySet = new Set();
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) mySet.add(nums2[j])
        }
    }
    return [...mySet];
};

console.log(intersection(nums1 = [1,2,2,1], nums2 = [2,2]));