/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  
  var t = 0;
  var ans = [];
  nums.push('#');
  for(var i=1; i<nums.length; i++)
    if(nums[i]-nums[t] !== i-t){
      if(i-t > 1)
        ans.push(nums[t]+'->' + nums[i-1]);
      else
        ans.push(nums[t].toString());
        t = i;
    }
  return ans;
};

console.log(summaryRanges(nums = [0,1,2,4,5,7]));