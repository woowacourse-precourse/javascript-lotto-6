const calculateTotalProfitRate = (price, count) => {
  const totalProfit =
    price /
    (5000 * count[0] +
      50000 * count[1] +
      1500000 * count[2] +
      30000000 * count[3] +
      2000000000 * count[4]);
  const profitRate = (totalProfit * 100).toFixed(1);
  return profitRate;
};

export default calculateTotalProfitRate;
