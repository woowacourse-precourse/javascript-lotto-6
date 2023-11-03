import { WINNING_PRIZE_NUMBERS } from "../constants/numbers.js";

export function devideMoneyForLotto(moneyForLotto) {
  return moneyForLotto / 1000;
}

export function profitRate(moneyForLotto, winningPrizeSum) {
  const rate = (winningPrizeSum / moneyForLotto) * 100;
  return Math.round(rate * 10) / 10;
}

export function sumOfWinning(rankCounts) {
  const sum =
    rankCounts[1] * WINNING_PRIZE_NUMBERS.rank1 +
    rankCounts[2] * WINNING_PRIZE_NUMBERS.rank2 +
    rankCounts[3] * WINNING_PRIZE_NUMBERS.rank3 +
    rankCounts[4] * WINNING_PRIZE_NUMBERS.rank4 +
    rankCounts[5] * WINNING_PRIZE_NUMBERS.rank5;
  return sum;
}
