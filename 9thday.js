/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var left = 1;
    var right = Math.floor(x/2) + 1;
    var mid;

    while(left <= right) {
        mid = Math.floor((left+right) / 2);

        if(mid * mid > x) {
            right = mid - 1;
        } else if(mid * mid < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};

console.log(mySqrt(x = 1));
console.log(mySqrt(x = 2));
console.log(mySqrt(x = 3));
console.log(mySqrt(x = 5));
console.log(mySqrt(x = 8));