import { MissionUtils } from '@woowacourse/mission-utils';

export const inputView = {
  async readLine(inputValue) {
    return MissionUtils.Console.readLineAsync(inputValue);
  }
}