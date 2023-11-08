import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './Validator.js';
import { message } from './constant.js';

class InputView {
  static async readMoney() {
    while (true) {
      try {
        const userInputMoney = await MissionUtils.Console.readLineAsync(message.INPUT_MONEY);
        Validator.validateMoney(userInputMoney);
        MissionUtils.Console.print(message.EMPTY_UNIT);
        return userInputMoney;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  static async readLottoNumbers() {
    try {
      let userInputNumbers = await MissionUtils.Console.readLineAsync(message.INPUT_WINNING_NUMBER);
      MissionUtils.Console.print(message.EMPTY_UNIT);
      userInputNumbers = userInputNumbers.split(',').map(Number);
      Validator.validateNumbers(userInputNumbers);
      return userInputNumbers;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.readLottoNumbers();
    }
  }

  static async readBonusNumber(userInputNumbers) {
    try {
      const inputBonusNumber = await MissionUtils.Console.readLineAsync(message.INPUT_BONUS_NUMBER);
      MissionUtils.Console.print(message.EMPTY_UNIT);
      Validator.validateBonusNumber(Number(inputBonusNumber), userInputNumbers);
      return inputBonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return this.readBonusNumber(userInputNumbers);
    }
  }
}
export default InputView;