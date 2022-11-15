/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for(let c in columnTitle) {
		//d = s[i](char) - 'A' + 1 (we used  s[i] -  'A' to convert the letter to a number like it's going to be C)

        let d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        console.log(d)
        result = result * 26 + d;
    }
    return result;
};

console.log(titleToNumber("ZY"));