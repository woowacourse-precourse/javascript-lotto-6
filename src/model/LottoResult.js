import MESSAGES from '../constants/messages';
import OutputView from '../view/OutputView';
import NUMBERS from '../constants/numbers';

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

    this.winningResult = this.countMatch(this.matchResult);

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

  static countMatch(matchResult) {
    const countMathResult = Array.from({ length: 5 }, () => 0);
    matchResult.forEach(match => {
      if (match === 3) {
        countMathResult[0] += 1;
        return;
      }
      if (match === 4) {
        countMathResult[1] += 1;
        return;
      }
      if (match === 5) {
        countMathResult[2] += 1;
        return;
      }
      if (match === MESSAGES.bonus) {
        countMathResult[3] += 1;
        return;
      }
      if (match === 6) {
        countMathResult[4] += 1;
      }
    });
    return countMathResult;
  }

  static getPrize(winningResult) {
    OutputView.printLottoResultHeader();

    let totalPrize = 0;

    winningResult.forEach((result, index) => {
      if (result !== 0) {
        totalPrize += result * NUMBERS.prize[index];
      }
      OutputView.printLottoResult(index, result);
    });

    return totalPrize;
  }
}

export default LottoResult;
