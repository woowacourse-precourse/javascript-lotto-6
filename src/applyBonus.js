function applyBonus(bonusNumber, eachLottoTicket, WinningStatistics) {
  const isBonusNumberMatched = eachLottoTicket.some(number => number === bonusNumber);
  if (isBonusNumberMatched) {
      WinningStatistics.fiveBonus++;
  } else {
      WinningStatistics.five++;
  }
  return WinningStatistics;
}

export default applyBonus;
