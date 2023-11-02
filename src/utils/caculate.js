export function devideMoneyForLotto(moneyForLotto) {
  return moneyForLotto / 1000;
}

export function profitRate(moneyForLotto, winningPrizeSum) {
  const rate = (winningPrizeSum / moneyForLotto) * 100;
  return Math.round(rate * 100) / 100;
}
