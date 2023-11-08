import { Console } from '@woowacourse/mission-utils';
import getWinningStatistics from '../utils/getWinningStatistics.js';
import MESSAGE from '../constants/message.js';
import getReturns from '../utils/getReturns.js';
import getRateOfReturn from '../utils/getRateOfReturn.js';

const OutputView = {
  printLottosString: (count, lottos) => {
    Console.print(`\n${count}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(`[${lotto.getNumbers().join(', ')}]`));
  },

  printWinningStatisticsString: (lottos, winningNumbers, bonusNumber) => {
    const winningStatistics = getWinningStatistics(lottos, winningNumbers, bonusNumber);
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
