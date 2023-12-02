import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message.js';
import Validator from '../validator/Validator.js';

const InputView = {
  async readPurchaseAmount() {
    const amount = await Console.readLineAsync(MESSAGE.enterPurchaseAmount);
    Validator.validateUserInput(amount);

    return amount;
  },

  async readWinningLotto() {
    const winningNumbers = await Console.readLineAsync(MESSAGE.enterWinningNumbers);
    Validator.validateUserInput(winningNumbers);

    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGE.enterBonusNumber);
    Validator.validateUserInput(bonusNumber);

    return bonusNumber;
  },
};

export default InputView;
