import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import MESSAGES from '../constants/messages.js';

const InputView = {
  async readPurchasePrice() {
    try {
      const amount = await MissionUtils.Console.readLineAsync(MESSAGES.purchase);

      Validator.inputPurchaseAmount(amount);

      return amount;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      const amount = await this.readPurchasePrice();

      Validator.inputPurchaseAmount(amount);

      return amount;
    }
  },

  async readWinningNumbers() {
    try {
      const winningNumbers = await MissionUtils.Console.readLineAsync(MESSAGES.winningNumber);

      Validator.inputWinningNumber(winningNumbers);

      return winningNumbers;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      const winningNumbers = await this.readWinningNumbers();

      Validator.inputWinningNumber(winningNumbers);

      return winningNumbers;
    }
  },

  async readBonusNumbers(winningNumber) {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync(MESSAGES.bonusNumber);

      Validator.inputBonusNumber(bonusNumber, winningNumber);

      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      const bonusNumber = await this.readBonusNumbers(winningNumber);

      Validator.inputBonusNumber(bonusNumber, winningNumber);

      return bonusNumber;
    }
  },
};

export default InputView;
