/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 75 ms
// Memory Usage: 41.9 MB
var lengthOfLastWord = function(s) {
    var result = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (result > 0) return result
        }
        else result++
    }
    return result
};

var lengthOfLastWord1 = function(s) {
    return s.trim().split(" ").pop().length;
};

// Shortest with regex:
var lengthOfLastWord2 = function(s) {
    return (s.match(/(\w+)\s*$/) || [, ''])[1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("a     "));