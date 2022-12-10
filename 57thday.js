/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if(n == 1) return true;
  while(n >= 3) {
    if(n == 3) return true;
    n = n / 3;
  }
  return false;
};

console.log(isPowerOfThree(n = 27));
console.log(isPowerOfThree(n = 0));
console.log(isPowerOfThree(n = -1));