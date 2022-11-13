/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    
    x = columnNumber / 26 | 0;
    y = columnNumber % 26;
    if (y == 0) {
        x -= 1;
        y = 26;
    }
    s = String.fromCharCode(64+y);
    while (x > 0) {
        y = x % 26
        if (y == 0) {
            x -= 1;
            y = 26;
        }
        x = x / 26 | 0;
        s += String.fromCharCode(64+y)
        // return s[-1::-1]
    }
    return s.split("").reverse().join("")

    // output = ''
    // while (columnNumber > 0){
    //     x = columnNumber % 26
    //     next = (columnNumber - x) / 26
    //     if(x == 0){
    //         x = 26
    //         next = next - 1
    //     }
    //     output = String.fromCharCode(64 + x) + output
    //     columnNumber = next
    // }
    // return output
};

console.log(convertToTitle(701));