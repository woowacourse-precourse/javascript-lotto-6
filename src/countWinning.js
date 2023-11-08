import applyBonus from "./applyBonus.js";

function countWinning(matchCount, WinningStatistics, bonusNumber, eachLottoTicket) {
    if (matchCount == 3) {
        WinningStatistics.three++;
    }
    if (matchCount == 4) {
        WinningStatistics.four++;
    }
    if (matchCount == 5) {
        WinningStatistics = applyBonus(bonusNumber, eachLottoTicket, WinningStatistics);  
    }
    if (matchCount == 6) {
        WinningStatistics.six++;
    }
    return WinningStatistics;
}

export default countWinning;
