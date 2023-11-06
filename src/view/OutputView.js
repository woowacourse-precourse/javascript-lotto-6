import { Console } from '@woowacourse/mission-utils';
import { LOTTO_END, LOTTO_START, RESULT_MESSAGE } from '../constants/output.js';
import { COUNT, RANKING } from '../constants/conditions.js';
import MESSAGES_TEMPLATE from '../constants/resultMessagesTemplate.js';

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

  printLotteryResultsSummary(rankingList, rateOfReturn) {
    const template = this.getResultStringTemplate(rankingList);
    Console.print(RESULT_MESSAGE.title);
    template.forEach(([key, value]) => {
      Console.print(`${key} - ${value}개`);
    });

    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },

  getResultStringTemplate(rankingList) {
    const messages = { ...MESSAGES_TEMPLATE };
    this.updateResultMessage(rankingList, messages);
    return Object.entries(messages);
  },

  updateResultMessage(rankingList, messages) {
    rankingList.forEach((ranking) => {
      if (ranking === RANKING.fifth)
        messages[RESULT_MESSAGE.threeMatch] += COUNT.plus;
      if (ranking === RANKING.fourth)
        messages[RESULT_MESSAGE.fourMatch] += COUNT.plus;
      if (ranking === RANKING.third)
        messages[RESULT_MESSAGE.fiveMatchNotBonus] += COUNT.plus;
      if (ranking === RANKING.second)
        messages[RESULT_MESSAGE.fiveMatchAndBonus] += COUNT.plus;
      if (ranking === RANKING.first)
        messages[RESULT_MESSAGE.allMatch] += COUNT.plus;
    });
  },
};

export default OutputView;
