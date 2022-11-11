/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        } else if (prices[i] - minprice > profit) {
            profit = prices[i] - minprice;
        }
    }
     return profit
};

console.log(maxProfit(prices = [7,1,5,3,6,4]));
console.log(maxProfit(prices = [7,6,4,3,1]));