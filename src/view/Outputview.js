import { Console } from '@woowacourse/mission-utils';
import { LOTTO_COUNT_MESSAGE } from '../Constant/MESSAGE.js';

const outputView = {
  printLottoCount(count) {
    Console.print(LOTTO_COUNT_MESSAGE.lottoCount(count));
  },

  printQuickPicks(quickPicks) {
    quickPicks.forEach((quickPick) => {
      Console.print(quickPick);
    });
  },
};

export default outputView;
