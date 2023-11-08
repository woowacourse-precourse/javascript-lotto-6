import Money from "../../common/rankingMoney.js";

const calculateTotalProfitRate = (price, count) => {
  const totalProfit =
    (Money.FIFTH_RANK_MONEY * count[0] +
      Money.FOURH_RANK_MONEY * count[1] +
      Money.THIRD_RANK_MONEY * count[2] +
      Money.SECOND_RANK_MONEY * count[3] +
      Money.FIRST_RANK_MONEY * count[4]) /
    price;
  const profitRate = (totalProfit * 100).toFixed(1);
  return profitRate;
};

export default calculateTotalProfitRate;
