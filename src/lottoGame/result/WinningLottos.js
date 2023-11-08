import { LottoResult } from './Lotto.js';
import { Print } from '../../interface/Output.js';
import { getRoundedNumber } from '../../utils/getRoundedNumber.js';
import { BONUS_NUMBER_TYPE } from '../../constants.js';

export class WinningLottosResult {
  #winningLottosResult = WinningLottosResult.WINNING_CONDITIONS_AND_PRIZES.map(
    ({ condition, prize }) => {
      return { condition, prize, count: 0, profit: 0 };
    },
  );

  #userMoney;

  static WINNING_CONDITIONS_AND_PRIZES = [
    {
      condition: {
        winningCount: 3,
        bonusType: BONUS_NUMBER_TYPE.useless,
      },
      prize: 5000,
    },
    {
      condition: {
        winningCount: 4,
        bonusType: BONUS_NUMBER_TYPE.useless,
      },
      prize: 50000,
    },
    {
      condition: {
        winningCount: 5,
        bonusType: BONUS_NUMBER_TYPE.withOutFiveWinningNumbers,
      },
      prize: 1500000,
    },
    {
      condition: {
        winningCount: 5,
        bonusType: BONUS_NUMBER_TYPE.withFiveWinningNumbers,
      },
      prize: 30000000,
    },
    {
      condition: {
        winningCount: 6,
        bonusType: BONUS_NUMBER_TYPE.useless,
      },
      prize: 2000000000,
    },
  ];

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
      const { winningCount, bonusType } = condition;
      if (bonusType === 2) {
        Print(`${winningCount}개 일치, 보너스 볼 일치 (${prize}원) - ${count}개`);

        return;
      }
      Print(`${winningCount}개 일치 (${prize}원) - ${count}개`);
    });

    Print(`총 수익률은 ${this.getTotalProfitRate()}%입니다.`);
  }
}
