import { Console } from '@woowacourse/mission-utils';
import { LOTTO_END, LOTTO_START, RESULT_MESSAGE } from '../constants/output.js';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printAutoLotto(lottos, purchaseAmount) {
    Console.print(`${purchaseAmount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const lottoString = `${LOTTO_START}${lotto.join(', ')}${LOTTO_END}`;
      Console.print(lottoString);
    });
  },

  printLotteryResultsSummary(winningResult, rateOfReturn) {
    const template = this.getResultStringTemplate(winningResult);
    Console.print(RESULT_MESSAGE.title);
    template.forEach(({ label, count }) => {
      Console.print(`${label} - ${count}개`);
    });

    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },

  getResultStringTemplate(winningResult) {
    return [
      { label: RESULT_MESSAGE.threeMatch, count: winningResult.threeMatching },
      { label: RESULT_MESSAGE.fourMatch, count: winningResult.fourMatching },
      {
        label: RESULT_MESSAGE.fiveMatchNotBonus,
        count: winningResult.fiveMatchingNotBonus,
      },
      {
        label: RESULT_MESSAGE.fiveMatchAndBonus,
        count: winningResult.fiveMatchingAndBonus,
      },
      { label: RESULT_MESSAGE.allMatch, count: winningResult.allMatching },
    ];
  },
};

export default OutputView;
