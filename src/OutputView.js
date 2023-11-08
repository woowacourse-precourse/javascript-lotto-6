import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO, OUTPUT_MSG } from './constant.js';

const outputView = {
  printLottoCount(lottoCount) {
    MissionUtils.Console.print(OUTPUT_MSG.PURCHASE(lottoCount));
  },

  printLottoNum(numbers) {
    MissionUtils.Console.print(`[${numbers.join(', ')}]`);
  },
};

export default outputView;