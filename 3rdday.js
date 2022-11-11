/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    if (!intervals.length) return intervals
    intervals.sort((a, b) => a.start !== b.start ? a.start - b.start : a.end - b.end)
    var prev = intervals[0]
    var res = [prev]
    for (var curr of intervals) {
        if (curr.start <= prev.end) {
            prev.end = Math.max(prev.end, curr.end)
        } else {
            res.push(curr)
            prev = curr
        }
    }
    return res
};

console.log(merge(intervals = [[1,3],[2,6],[8,10],[15,18]]))
console.log(merge(intervals = [[1,4],[4,5]]))