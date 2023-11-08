import { LottoResult } from './Lotto.js';
import { Print } from '../../interface/Output.js';
import { getRoundedNumber } from '../../utils/getRoundedNumber.js';
import { BONUS_NUMBER_TYPE, WINNING_CONDITIONS_AND_PRIZES } from '../../constants.js';

export class WinningLottosResult {
  #winningLottosResult = WINNING_CONDITIONS_AND_PRIZES.map(({ condition, prize }) => {
    return { condition, prize, count: 0, profit: 0 };
  });

  #userMoney;

  constructor(lottos, winningNumbers, bonusNumber, userMoney) {
    lottos.map((lottoNumbers) => {
      this.#setWinningLottos(new LottoResult(lottoNumbers, winningNumbers, bonusNumber));
    });

    this.#userMoney = userMoney;
  }

  #setWinningLottos(lottoResult) {
    this.#winningLottosResult.forEach((winningLotto) => {
      if (lottoResult.isWin(winningLotto.condition)) {
        winningLotto.count += 1;
        winningLotto.profit += winningLotto.prize;
      }
    });
  }

  getTotalProfitRate() {
    let totalProfit = 0;
    this.#winningLottosResult.forEach(({ profit }) => {
      totalProfit += profit;
    });

    const rate = (totalProfit / this.#userMoney) * 100;
    return getRoundedNumber(rate);
  }

  print() {
    Print('당첨통계\n---\n');
    this.#winningLottosResult.forEach(({ condition, prize, count }) => {
      const { winningNumbersCount, bonusNumberType } = condition;
      if (bonusNumberType === 2) {
        Print(`${winningNumbersCount}개 일치, 보너스 볼 일치 (${prize}원) - ${count}개`);

        return;
      }
      Print(`${winningNumbersCount}개 일치 (${prize}원) - ${count}개`);
    });

    Print(`총 수익률은 ${this.getTotalProfitRate()}%입니다.`);
  }
}
