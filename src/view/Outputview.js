import { Console } from '@woowacourse/mission-utils';
import { LOTTO_COUNT_MESSAGE, WIN_COUNT_MESSAGE } from '../Constant/MESSAGE.js';
import { REWARDSET } from '../Constant/SETTING.js';

const outputView = {
  printLottoCount(count) {
    Console.print(LOTTO_COUNT_MESSAGE.lottoCount(count));
  },

  printQuickPicks(quickPicks) {
    quickPicks.forEach((quickPick) => {
      Console.print(quickPick);
    });
  },

  printWinCount(winResultArr) {
    Console.print('\n당첨통계');
    Console.print('---');
    Object.keys(REWARDSET).forEach((rank, i) => {
      Console.print(WIN_COUNT_MESSAGE.winCount(REWARDSET[rank].cnt, REWARDSET[rank].money, winResultArr[i]));
    });
  },

  printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  },
};

export default outputView;
