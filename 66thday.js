/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    obj = {};
    result = [];
    for(let i of ransomNote){
        obj[i] = obj[i] ? obj[i]+1 : 1
    }
    for(let i of magazine){
        if(obj[i]){
            obj[i]--
            result.push(i)
        }
    }
    return result.length === ransomNote.length ? true : false;
};

console.log(canConstruct(ransomNote = "aa", magazine = "ab"));