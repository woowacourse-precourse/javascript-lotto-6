import applyBonus from "./applyBonus.js";

function countWinning(matchCount, WinningStatistics, bonusNumber, eachLottoTicket) {
  switch (matchCount) {
    case 3:
      WinningStatistics.three++;
      break;
    case 4:
      WinningStatistics.four++;
      break;
    case 5:
      WinningStatistics = applyBonus(bonusNumber, eachLottoTicket, WinningStatistics);
      break;
    case 6:
      WinningStatistics.six++;
      break;
    default:
      break;
  }
  return WinningStatistics;
}

export default countWinning;
