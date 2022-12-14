/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let str = s.split("");
  let vowels = 'aeiouAEIOU'
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    while (l < r && !vowels.includes(str[l])) l += 1;
    while (r > l && !vowels.includes(str[r])) r -= 1;
    [str[l], str[r]] = [str[r], str[l]];
    l +=1
    r -=1
  }
  return str.join("");
};

console.log(reverseVowels(s = "hello"));