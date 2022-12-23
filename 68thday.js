/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    obj = {};
    for(let i of s){
        obj[i] = obj[i] ? obj[i]+1 : 1
    }
    for(let i of t){
        if(obj[i]){
            obj[i]--
        } else {
            return i
        }
    }
    return ""
};

console.log(findTheDifference(s = "abcd", t = "abcde"));
console.log(findTheDifference(s = "a", t = "aa"));