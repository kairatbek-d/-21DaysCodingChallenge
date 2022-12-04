/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.length;

    for(let i = 0; i < nums.length; i++) {
        sum += i - nums[i];
    }
    return sum;
};

console.log(missingNumber(nums = [3,0,1]));
console.log(missingNumber(nums = [0,1,2,3]));