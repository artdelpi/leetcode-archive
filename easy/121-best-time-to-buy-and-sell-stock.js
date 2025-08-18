/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let bestDeal = 0;

    // Test for every starting day
    for (let i=0;i<prices.length;i++) {
        if (i === prices.length-1) {
            break // not possible to b/s
        };
        for (let j=i+1;j<prices.length;j++) {
            // Only considers if $sell > $buy
            if (prices[i] < prices[j]) {
                profit = prices[j] - prices[i];
                if (profit > bestDeal) {
                    bestDeal = profit;
                }
            }
        }
    }
    return bestDeal;
};

console.log(maxProfit([7,1,5,3,6,4]))