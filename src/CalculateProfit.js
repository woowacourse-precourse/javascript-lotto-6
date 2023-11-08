import COUNT_WINNERS from './CountWinners.js';

const calculateProfit = (amount, countWinners) => {
  const winnings = Object.keys(countWinners).reduce(
    (acc, key) => acc + countWinners[key] * COUNT_WINNERS[key].prize,
    0
  );
  const profitRate = (winnings / amount) * 100;
  return profitRate.toFixed(1);
};

export default calculateProfit;
