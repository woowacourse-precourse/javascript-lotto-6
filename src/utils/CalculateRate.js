import GAME from '../constants/Game';
function calculateRate(money,winningList) {
    const winningMoney = winningList[0] * GAME.THREE_MATCH_WINNINGS + winningList[1] * GAME.FOUR_MATCH_WINNINGS + winningList[2] * GAME.FIVE_MATCH_WINNINGS + winningList[3] * GAME.FIVE_MATCH_WINNINGS_WITH_BONUS + winningList[4] * GAME.SIX_MATCH_WINNINGS;
    return (winningMoney/money * 100).toFixed(1);
}

export default calculateRate;