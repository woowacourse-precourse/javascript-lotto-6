import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import getReturns from '../utils/getReturns.js';
import getRateOfReturn from '../utils/getRateOfReturn.js';

const OutputView = {
  printLottosString: (count, lottos) => {
    Console.print(`\n${count}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(`[${lotto.join(', ')}]`));
  },

  printWinningStatisticsString: winningStatistics => {
    Console.print(MESSAGE.result.title);
    winningStatistics.forEach(winningStatistic => Console.print(winningStatistic));
  },

  printRateOfReturnString: (lottos, purchaseAmount, winningNumbers, bonusNumber) => {
    const returns = getReturns(lottos, winningNumbers, bonusNumber);
    const rateOnReturns = getRateOfReturn(purchaseAmount, returns);
    Console.print(`총 수익률은 ${rateOnReturns}입니다.`);
  },
};

export default OutputView;
