const CalculateProfit = (amount, lottoResult) => {
  const totalWinningMoney =
    lottoResult["3"] * 5000 +
    lottoResult["4"] * 50000 +
    lottoResult["5"] * 1500000 +
    lottoResult["5bonus"] * 30000000 +
    lottoResult["6"] * 2000000000;
  const profit = Math.round((totalWinningMoney / amount) * 100 * 10) / 10;
  return profit;
};

export default CalculateProfit;
