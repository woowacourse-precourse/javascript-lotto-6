import RANK from './constants/rank.js';
import PURCHASE_PRICE from './constants/purchasePrice.js';

export default class LottoGame {
  constructor(lottos, winningNumbers, bonusNumber) {
    this.lottos = lottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  getResult() {
    const rankBoard = this.getRankBoard();
    const initalMoney = this.lottos.length * PURCHASE_PRICE.divisionUnit;
    const finalMoney = this.getFinalMoney(rankBoard);
    const profitAbility = this.getProfitAbility(initalMoney, finalMoney);
    return { rankBoard, profitAbility };
  }

  getRankBoard() {
    const { rankBoard } = RANK;
    this.lottos.forEach((lotto) => {
      const { matchingCount, bonusMatch } = this.calculateResults(lotto);
      const rank = this.calculateRank(matchingCount, bonusMatch);
      if (rank) rankBoard[rank] += 1;
    });
    return rankBoard;
  }

  calculateResults(lotto) {
    const lottoNum = lotto.getLottoNumbers();
    const matchingCount = lottoNum.filter((number) => this.winningNumbers.includes(number)).length;
    const bonusMatch = lottoNum.includes(this.bonusNum);
    return { matchingCount, bonusMatch };
  }

  getFinalMoney(rankBoard) {
    const { rankMoney } = RANK;
    const rankArr = Object.entries(rankBoard);
    return rankArr.reduce((money, [rank, count]) => money + count * rankMoney[rank], 0);
  }

  getProfitAbility(initalMoney, finalMoney) {
    const profitAbility = finalMoney / initalMoney;
    return (profitAbility * 100).toFixed(1);
  }

  calculateRank(matchingCount, bonusMatch) {
    switch (matchingCount) {
      case 6:
        return 1;
      case 5:
        return bonusMatch ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 0;
    }
  }
}
