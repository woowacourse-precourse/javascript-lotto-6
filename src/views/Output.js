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

  printWinningResult(winningResult) {
    const messages = [
      `${MESSAGE.OUTPUT_FIFTH}${winningResult.fifth}개`,
      `${MESSAGE.OUTPUT_FOURTH}${winningResult.fourth}개`,
      `${MESSAGE.OUTPUT_THIRD}${winningResult.third}개`,
      `${MESSAGE.OUTPUT_SECOND}${winningResult.second}개`,
      `${MESSAGE.OUTPUT_FIRST}${winningResult.first}개`,
    ];

    messages.forEach((message) => MissionUtils.Console.print(message));
  },

  printPlusRatio(plusRatio){
    MissionUtils.Console.print(`총 수익률은 ${plusRatio}%입니다.`);
  }
};
export default Output;
