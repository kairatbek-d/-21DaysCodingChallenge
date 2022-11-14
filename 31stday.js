/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  
    let numCount = {};
    for (let i = 0; i < nums.length; i++) {
        numCount[nums[i]] = (numCount[nums[i]] || 0) + 1;
    }
    for (const num in numCount) {
        if (numCount[num] > nums.length / 2) {
            return Number(num);
        }
    }
};

console.log(majorityElement(nums = [3,2,3]));