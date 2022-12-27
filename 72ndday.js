/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let res = "";
    let dic = "abcdef";

    if (num == 0) return "0";

    if (num < 0) {
        num += Math.pow(2,32);
    }

    while(num > 0) {
        let rem = num % 16;
        if(rem > 9) res = dic[rem - 10] + res;
        else res = rem.toString() + res;
        num = num / 16 | 0;
    }
    return res;

    if (num < 0){
        num = 0xFFFFFFFF + num + 1;
    }

    return num.toString(16);
};

console.log(toHex(num = 26));
console.log(toHex(num = -1));