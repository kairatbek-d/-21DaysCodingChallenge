/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let xor = nums[0]
    for(let i = 1; i< nums.length; i++) {
        xor ^= nums[i]
        console.log(xor);
    }
    return xor
    // var numsLength = nums.length, i;
    
    // for (i = 1; i < numsLength; i++) {
    //     nums[0] ^= nums[i];
    // }
    
    // return nums[0];
};

console.log(singleNumber([4,1,2,1,2]));