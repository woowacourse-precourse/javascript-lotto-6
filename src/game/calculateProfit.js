const calculateProfit = (lottoResult) => {
    let profit = 0;
    profit += compareLottoResult(lottoResult);

    return profit;
}

const compareLottoResult = (lottoResult) => {
    if (lottoResult.three.count > 0) { return lottoResult.three.winnings * lottoResult.three.count }
    if (lottoResult.four.count > 0) { return lottoResult.four.winnings * lottoResult.four.count }
    if (lottoResult.five.count > 0) { return lottoResult.five.winnings * lottoResult.five.count }
    if (lottoResult.fiveBonus.count > 0) { return lottoResult.fiveBonus.winnings * lottoResult.fiveBonus.count }
    if (lottoResult.six.count > 0) { return lottoResult.six.winnings * lottoResult.six.count }
}


export default calculateProfit;