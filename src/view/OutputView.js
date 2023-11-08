import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printLottosString: (count, lottos) => {
    Console.print(`\n${count}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(`[${lotto.join(', ')}]`));
  },

  printWinningStatisticsString: winningStatistics => {
    Console.print(MESSAGE.result.title);
    winningStatistics.forEach(winningStatistic => Console.print(winningStatistic));
  },

  printRateOfReturnString: (rateOfReturn) => {
    Console.print(`총 수익률은 ${rateOfReturn}입니다.`);
  },
};

export default OutputView;
