import { Print } from '../../interface/Output.js';
import { getRoundedNumber } from '../../utils/getRoundedNumber.js';
import { WINNING_CONDITIONS_AND_PRIZES } from '../../constants.js';
import { separator } from '../../utils/separator.js';

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
    const rate = (this.getTotalProfit() / this.#userMoney) * 100;
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
    this.printTitle();
    this.#winningLottosResult.forEach(({ condition, prize, count }) => {
      const { winningNumbersCount, bonusNumberType } = condition;
      if (bonusNumberType === 2) {
        this.printWinningLottoWithBonus(winningNumbersCount, prize, count);
      } else {
        this.printWinningLotto(winningNumbersCount, prize, count);
      }
    });

    this.printTotalProfitRate();
  }

  printTitle() {
    Print('당첨통계\n---\n');
  }

  printWinningLottoWithBonus(winningNumbersCount, prize, count) {
    Print(`${winningNumbersCount}개 일치, 보너스 볼 일치 (${separator(prize)}원) - ${count}개`);
  }

  printWinningLotto(winningNumbersCount, prize, count) {
    Print(`${winningNumbersCount}개 일치 (${separator(prize)}원) - ${count}개`);
  }

  printTotalProfitRate() {
    Print(`총 수익률은 ${this.getTotalProfitRate()}%입니다.`);
  }
}
