import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';

const outputView = {
  printPurchaseSummary(count) {
    MissionUtils.Console.print(`\n${count}${OUTPUT_MESSAGE.PURCHASE_SUMMARY}`);
  },

  printLottoNumbersList(list) {
    MissionUtils.Console.print(`[${list.join(', ')}]`);
  },
};

export default outputView;
