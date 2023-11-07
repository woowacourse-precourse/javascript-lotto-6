import { Console } from '@woowacourse/mission-utils';
import getWinningStatistics from '../utils/getWinningStatistics.js';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printLottosString: (count, lottos) => {
    Console.print(`\n${count}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(lotto.getNumbers()));
  },

  printWinningStatisticsString: (lottos, winningNumbers, bonusNumber) => {
    const winningStatistics = getWinningStatistics(lottos, winningNumbers, bonusNumber);

    Console.print(MESSAGE.result.title);
    winningStatistics.forEach(winningStatistic => Console.print(winningStatistic));
  },
};

export default OutputView;
