/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num < 2){
        return num;
    }
    let y = num;
    let z = (y + (num/y))/2;
         
    while(Math.abs(y-z)>=0.00001){
        y = z;
        z = (y + (num/y))/2;
    }
    return z.toPrecision(10) % 1 === 0;
};


console.log(isPerfectSquare(num = 16));
console.log(isPerfectSquare(num = 14));