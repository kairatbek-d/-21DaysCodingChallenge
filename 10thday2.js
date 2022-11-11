/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1);
    console.log(dp);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        console.log(dp);
        dp[i] = dp[i-1] + dp[i-2];
    }
    console.log(dp);
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
};

console.log(climbStairs(n = 3));
// console.log(climbStairs(n = 10));