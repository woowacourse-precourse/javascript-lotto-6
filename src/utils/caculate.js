import { LOTTERY_WINNINGS, LOTTO_NUMBERS } from "../constants/numbers.js";

export function divideMoneyForLotto(moneyForLotto) {
  return moneyForLotto / LOTTO_NUMBERS.amount;
}

export function profitRate(moneyForLotto, winningPrizeSum) {
  const rate = (winningPrizeSum / moneyForLotto) * 100;
  return Math.round(rate * 10) / 10;
}

export function sumOfWinning(rankCounts) {
  const sum =
    rankCounts[1] * LOTTERY_WINNINGS.rank1 +
    rankCounts[2] * LOTTERY_WINNINGS.rank2 +
    rankCounts[3] * LOTTERY_WINNINGS.rank3 +
    rankCounts[4] * LOTTERY_WINNINGS.rank4 +
    rankCounts[5] * LOTTERY_WINNINGS.rank5;
  return sum;
}
