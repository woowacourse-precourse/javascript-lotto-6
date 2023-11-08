function applyBonus(bonusNumber, eachLottoTicket, WinningStatistics) {
    for (let i = 0; i < 6; i++) {
        if (bonusNumber == eachLottoTicket[i]) {
            WinningStatistics.fiveBonus++;
            return WinningStatistics;
        }
    }
    WinningStatistics.five++;
    return WinningStatistics;
}

export default applyBonus;
