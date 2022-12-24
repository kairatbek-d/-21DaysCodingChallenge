/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;

    let subsequence = 0;
    for(let x of t) {
        if(s[subsequence] == x) {
            subsequence++;
        }
    }
    return subsequence === s.length;
};

console.log(isSubsequence(s = "abc", t = "ahbgdc"));
console.log(isSubsequence(s = "axc", t = "ahbgdc"));