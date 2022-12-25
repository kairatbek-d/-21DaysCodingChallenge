/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const output = [];
    
    // find the number of ones in bit expression of time and match with turnedOn
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const ones = Number(h * 64 + m).toString(2).split('').filter(d => d === '1').length;
            if (ones === turnedOn) output.push(m < 10 ? `${h}:0${m}` : `${h}:${m}`);
        }
    }
    
    return output;
};

console.log(readBinaryWatch(1));