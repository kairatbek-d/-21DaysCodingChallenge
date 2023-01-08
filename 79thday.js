/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let value = x ^ y;
    let counter = 0;
    
    while (value != 0) {
        if (value & 1)
           ++counter;
           
        value = value >> 1;
    }
    
    return counter;
};

console.log(hammingDistance(x = 1, y = 4));