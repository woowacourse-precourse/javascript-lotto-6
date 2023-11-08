import { MissionUtils } from '@woowacourse/mission-utils';
import { deepFreeze } from '../utils/deepFreeze.js';

export const InputView = deepFreeze({
  async readLine(message) {
    return MissionUtils.Console.readLineAsync(message);
  },
});
