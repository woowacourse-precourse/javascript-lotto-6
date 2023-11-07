import WINNINGS from '../constants/winnings.js';

const caculateProfitRate = (purchaseAmount, stats) => {
  const totalWinnings = Object.values(WINNINGS).reduce(
    (acc, winning, idx) => acc + winning * stats[idx],
    0,
  );

  return ((totalWinnings * 100) / purchaseAmount).toFixed(1);
};

export default caculateProfitRate;
