/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const downCasedStr = s.toLowerCase()
        .replace(/[^0-9a-z]/gi, '');

    const reversedStr = downCasedStr.split('')
        .reverse()
        .join('');
    
    return reversedStr === downCasedStr;
};

console.log(isPalindrome(s = "A man, a plan, a canal: Panama"));