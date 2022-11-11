/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let ans = new Array(rowIndex+1);
    for(let i=0; i<rowIndex+1; i++) {
        ans[i] = new Array(i+1);
        ans[i][0] = ans[i][i] = 1;
        for(let j=1; j<=i/2; j++) {
            ans[i][j] = ans[i-1][j-1] + ans[i-1][j];
            ans[i][i-j] = ans[i][j];
        }
    }
    return ans[rowIndex]
};

console.log(getRow(3));