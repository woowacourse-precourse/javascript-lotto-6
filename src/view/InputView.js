import { MissionUtils } from '@woowacourse/mission-utils';
import { INFO_MESSAGES } from '../constant.js';

export default class InputView {
  async readAmount() {
    return this.readLine(INFO_MESSAGES.AMOUNT);
  }

  async readNumber() {
    return this.readLine(INFO_MESSAGES.NUMBER);
  }

  async readLine(message) {
    try {
      return await MissionUtils.Console.readLineAsync(`${message}\n`);
    } catch (error) {
      MissionUtils.Console.print(error);
      return error;
    }
  }
}
