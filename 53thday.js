/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertionIdx = 0;
    let itr = 0;
    while(itr < nums.length) {
        if(nums[itr] !== 0) {
            nums[insertionIdx] = nums[itr];
            insertionIdx+=1;
        }
        itr+=1;
    }
    while(insertionIdx < nums.length) {
        nums[insertionIdx] = 0;
        insertionIdx+=1;
    }

    return nums;
};

console.log(moveZeroes(nums = [0,1,0,3,12]));