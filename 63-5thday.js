/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    obj = {};
    result = [];
    for(let i of nums1){
        obj[i] = obj[i] ? obj[i]+1 : 1
    }
    for(let i of nums2){
        if(obj[i]){
            obj[i]--
            result.push(i)
        }
    }
    return result
};

console.log(intersect(nums1 = [1,2,2,1], nums2 = [2,2]));
console.log(intersect(nums1 = [4,9,5], nums2 = [9,4,9,8,4]));