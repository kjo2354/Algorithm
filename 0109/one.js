var maxProfit = function(prices) {
    let profit = 0;
    for(let i=1; i< prices.length; i++){
        profit = profit + Math.max((prices[i]-prices[i-1]), 0);
    }
    return profit;
};
console.log(maxProfit([7,1,5,3,6,4]));