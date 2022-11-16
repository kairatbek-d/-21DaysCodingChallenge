/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var result = 0;
  var count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;

  // let str = n.toString(2).split('').reverse().join('');
  // return parseInt(str + "0".repeat(32 - str.length), 2)
};

console.log(reverseBits(00000010100101000001111010011100));
// console.log(reverseBits(56));