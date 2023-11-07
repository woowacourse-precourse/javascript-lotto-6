import { MissionUtils } from '@woowacourse/mission-utils';

export default class View {
  async readMoney(message) {
    return MissionUtils.Console.readLineAsync(message);
  }
}
