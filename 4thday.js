/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

    let size = intervals.length;
    let index = 0;
    let res = [];
    
    while(index < size && intervals[index][1] < newInterval[0]) {
        res.push(intervals[index]);
        index++;
    }
    while(index < size && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    res.push(newInterval);
    while(index < size) {
        res.push(intervals[index]);
        index++;
    }
    return res;
};

console.log(insert(intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]));
// console.log(insert(intervals = [[1,3],[6,9]], newInterval = [2,5]));