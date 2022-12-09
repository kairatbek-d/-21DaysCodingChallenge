/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [];
    var sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.sums.push(sum);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
};

/** 
 * Your NumArray object will be instantiated and called as such: */
var obj = new NumArray(nums = [-2, 0, 3, -5, 2, -1]);
var param_1 = obj.sumRange(left = 0, right = 2);
var param_2 = obj.sumRange(left = 2, right = 5);

console.log(param_1);
console.log(param_2);