import { MissionUtils } from '@woowacourse/mission-utils';
import { INFO_MESSAGES } from '../constant.js';

export default class InputView {
  async readAmount() {
    return this.readLine(INFO_MESSAGES.AMOUNT);
  }

  async readWinningNumbers() {
    return this.readLine(INFO_MESSAGES.WINNING_NUMBERS);
  }

  async readBonusNumber() {
    return this.readLine(INFO_MESSAGES.BONUS_NUMBER);
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
