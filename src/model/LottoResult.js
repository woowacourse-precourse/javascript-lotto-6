import MESSAGES from '../constants/messages.js';
import OutputView from '../view/OutputView.js';

class LottoResult {
  constructor() {
    this.matchResult = [];
    this.winningResult = [];
    this.totalPrize = 0;
  }

  static getLottoResult(userLottoNumbers, userBonusNumber, winningNumberList) {
    this.matchResult = winningNumberList.map(winningNumbers =>
      this.checkMatch(userLottoNumbers, userBonusNumber, winningNumbers),
    );

    this.winningResult = this.getWinningList(this.matchResult);

    this.totalPrize = this.getPrize(this.winningResult);

    return this.totalPrize;
  }

  static checkMatch(userLottoNumbers, userBonusNumber, winningNumbers) {
    let matchCount = 0;

    winningNumbers.forEach(winningNumber => {
      userLottoNumbers.forEach(userLottoNumber => {
        if (winningNumber === Number(userLottoNumber)) matchCount += 1;
      });
    });

    if (matchCount === 5 && winningNumbers.includes(Number(userBonusNumber)))
      return MESSAGES.bonus;

    return matchCount;
  }

  static getWinningList(result) {
    const initResult = Array.from({ length: 5 }, () => 0);
    result.forEach(e => {
      if (e === 3) {
        initResult[0] += 1;
      }
      if (e === 4) {
        initResult[1] += 1;
      }
      if (e === 5) {
        initResult[2] += 1;
      }
      if (e === MESSAGES.bonus) {
        initResult[3] += 1;
      }
      if (e === 6) {
        initResult[4] += 1;
      }
    });
    return initResult;
  }

  static getPrize(winningResult) {
    const messages = [
      MESSAGES.matchThree,
      MESSAGES.matchFour,
      MESSAGES.matchFive,
      MESSAGES.matchFiveAndBonus,
      MESSAGES.matchSix,
    ];

    OutputView.printLottoResultHeader();

    const prize = [5000, 50000, 1500000, 30000000, 2000000000];

    let totalPrize = 0;

    winningResult.forEach((result, index) => {
      if (result !== 0) {
        totalPrize += result * prize[index];
      }
      OutputView.printLottoResult(messages[index], result);
    });

    return totalPrize;
  }
}

export default LottoResult;
