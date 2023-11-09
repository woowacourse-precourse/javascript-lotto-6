import { getRoundedNumber } from '../../utils/getRoundedNumber.js';
import { WINNING_CONDITIONS_AND_PRIZES } from '../../constants.js';
import { printResult } from './printResult.js';

const percent = 100;

export class WinningLottosResult {
  #winningLottosResult = WINNING_CONDITIONS_AND_PRIZES.map(({ condition, prize }) => {
    return { condition, prize, count: 0, profit: 0 };
  });

  #userMoney;

  #winningLottos;

  constructor(lottoResults, userMoney) {
    this.#winningLottos = lottoResults.filter((lottoResult) => lottoResult.isWin());

    this.#userMoney = userMoney;

    this.#setWinningLottosResult();
  }

  getWinningLottos() {
    return this.#winningLottos;
  }

  getWinningLottosResult() {
    return this.#winningLottosResult;
  }

  getTotalProfit() {
    return this.#winningLottosResult.reduce(
      (accumulator, current) => accumulator + current.profit,
      0,
    );
  }

  getTotalProfitRate() {
    const rate = (this.getTotalProfit() / this.#userMoney) * percent;
    return getRoundedNumber(rate);
  }

  #setWinningLottosResult() {
    this.#winningLottos.forEach((winningLotto) => {
      const winningLottoResult = this.getWinningLottoResultPairedWithConditions(winningLotto);

      if (winningLottoResult) {
        this.increaseWinningLottoCountAndProfit(winningLottoResult);
      }
    });
  }

  getWinningLottoResultPairedWithConditions(winningLotto) {
    return this.#winningLottosResult.find(({ condition }) =>
      winningLotto.compareResultWithCondition(condition),
    );
  }

  increaseWinningLottoCountAndProfit(winningLotto) {
    winningLotto.count += 1;
    winningLotto.profit += winningLotto.prize;
  }

  print() {
    printResult.title();
    this.#winningLottosResult.forEach(({ condition, prize, count }) => {
      const { winningNumbersCount, bonusNumberType } = condition;
      if (bonusNumberType === 2) {
        printResult.winningLottoWithBonus(winningNumbersCount, prize, count);
      } else {
        printResult.winningLotto(winningNumbersCount, prize, count);
      }
    });

    printResult.totalProfitRate(this.getTotalProfitRate());
  }
}
