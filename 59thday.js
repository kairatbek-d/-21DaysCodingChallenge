/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n==1) return true

    return powerOfFour(n,4)
};

function powerOfFour(n,p){
    if(p==0) return true
    if(n==p) return true
    if(n<p)  return false
    return powerOfFour(n, p*4)
    
};

console.log(isPowerOfFour(n = 16));
console.log(isPowerOfFour(n = 5));
console.log(isPowerOfFour(n = 1));
console.log(isPowerOfFour(n = 8));