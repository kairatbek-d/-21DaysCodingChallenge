/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // let xor = nums[0]
    // for(let i = 1; i< nums.length; i++) xor ^= nums[i]
    // return xor
    return nums.length !== (new Set(nums)).size;
};

console.log(containsDuplicate(nums = [1,2,3,4]));