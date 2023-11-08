import { MissionUtils } from '@woowacourse/mission-utils';
import { deepFreeze } from '../utils/deepFreeze.js';

export const OutputView = deepFreeze({
  printLine(message) {
    MissionUtils.Console.print(message);
  },

  divideLine() {
    MissionUtils.Console.print('');
  },
});
