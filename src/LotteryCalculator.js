import LOTTO from "./constants/LOTTO.js";

const LotteryCalculator = {
  totalPrize(results) {
    const totalPrize = results.reduce(
      (acc, result) => acc + LOTTO.PRIZE[result.rank] * result.count,
      0
    );
    return totalPrize;
  },
  profit(totalPrize, purchaseAmount) {
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  },
};
export default LotteryCalculator;
