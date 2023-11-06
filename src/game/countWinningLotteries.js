function countWinningLotteries(sameNumberCount) {
  const WINNING_LOTTERIES = new Array(5).fill(0);
  sameNumberCount.forEach((count) => {
    if (count >= 3) WINNING_LOTTERIES[count - 3] += 1;
  });
  return WINNING_LOTTERIES;
}

export default countWinningLotteries;
