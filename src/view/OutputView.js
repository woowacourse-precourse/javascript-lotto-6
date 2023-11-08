import { Console } from '@woowacourse/mission-utils';
import { LOTTO_END, LOTTO_START, RESULT_MESSAGE } from '../constants/output';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printPurchaseLotto(lottos, purchaseAmount) {
    Console.print(`${purchaseAmount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const lottoString = `${LOTTO_START}${lotto.join(', ')}${LOTTO_END}`;
      Console.print(lottoString);
    });
  },

  printLotteryResultsSummary(matchingTable, rateOfReturn) {
    const template = this.getResultStringTemplate(matchingTable);
    Console.print(RESULT_MESSAGE.title);
    template.forEach(([message, count]) => {
      Console.print(`${message} - ${count}개`);
    });
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },

  getResultStringTemplate(matchingTable) {
    return [
      [RESULT_MESSAGE.threeMatch, matchingTable.three],
      [RESULT_MESSAGE.fourMatch, matchingTable.four],
      [RESULT_MESSAGE.fiveMatchNotBonus, matchingTable.fiveNotBonus],
      [RESULT_MESSAGE.fiveMatchAndBonus, matchingTable.fiveAndBonus],
      [RESULT_MESSAGE.allMatch, matchingTable.all],
    ];
  },
};

export default OutputView;
