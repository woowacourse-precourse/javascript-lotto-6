const CalculateTotalMoney = (prizeCounts) => {
  const PRIZE_MONEY = [2000000000, 30000000, 1500000, 50000, 5000];
  let totalMoney = 0;

  prizeCounts.forEach((count, index) => {
    totalMoney += count * PRIZE_MONEY[index];
  });

  return totalMoney;
};

export default CalculateTotalMoney;
