import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message';

const Output = {
  printPurcahse(count) {
    MissionUtils.Console.print(count + MESSAGE.OUTPUT_PURCHASE);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) =>
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`),
    );
  },

  printErrorMessage(message) {
    MissionUtils.Console.print(message);
  },

  printStatistic() {
    MissionUtils.Console.print(MESSAGE.OUTPUT_STATISTIC);
  },
};
export default Output;
