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

  getTotalProfitRate() {
    const totalProfit = this.#winningLottosResult.reduce(
      (accumulator, current) => accumulator + current.profit,
      0,
    );

    const rate = (totalProfit / this.#userMoney) * 100;
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
    Print('당첨통계\n---\n');
    this.#winningLottosResult.forEach(({ condition, prize, count }) => {
      const { winningNumbersCount, bonusNumberType } = condition;
      if (bonusNumberType === 2) {
        Print(`${winningNumbersCount}개 일치, 보너스 볼 일치 (${separator(prize)}원) - ${count}개`);

        return;
      }
      Print(`${winningNumbersCount}개 일치 (${separator(prize)}원) - ${count}개`);
    });

    Print(`총 수익률은 ${this.getTotalProfitRate()}%입니다.`);
  }
}
