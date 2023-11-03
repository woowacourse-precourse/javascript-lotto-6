import { MissionUtils } from '@woowacourse/mission-utils';

export const OutputView = {
  printLine(message) {
    MissionUtils.Console.print(message);
  },

  divideLine() {
    MissionUtils.Console.print('');
  },
};
