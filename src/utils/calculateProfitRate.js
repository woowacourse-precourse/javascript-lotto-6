import WINNINGS from '../constants/winnings.js';

const caculateProfitRate = (purchaseAmount, stats) => {
  const totalWinnings = Object.values(WINNINGS).reduce(
    (acc, winning, idx) => acc + winning * stats[idx],
    0,
  );
  const profitRate = (totalWinnings * 100) / purchaseAmount;

  return profitRate % 1 ? profitRate.toFixed(1) : profitRate;
};

export default caculateProfitRate;
