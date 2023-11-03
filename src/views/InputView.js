import { MissionUtils } from '@woowacourse/mission-utils';

export const InputView = {
  async readLine(message) {
    return MissionUtils.Console.readLineAsync(message);
  },
};
