const calculateProfit = (lottoResult) => {
    let profit = 0;
    if (lottoResult.three.count > 0) { profit += (lottoResult.three.winnings * lottoResult.three.count) };
    if (lottoResult.four.count > 0) { profit += (lottoResult.four.winnings * lottoResult.four.count) };
    if (lottoResult.five.count > 0) {
        profit += (lottoResult.five.winnings * lottoResult.five.count)
    };
    if (lottoResult.fiveBonus.count > 0) { profit += (lottoResult.fiveBonus.winnings * lottoResult.fiveBonus.count) };
    if (lottoResult.six.count > 0) { profit += (lottoResult.six.winnings * lottoResult.six.count) };

    return profit;
}

export default calculateProfit;