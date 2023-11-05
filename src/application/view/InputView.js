import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../../utils/constants.js';
import Validator from '../../Validator.js';

class InputView {
  constructor() {
    this.Validator = new Validator();
  }

  async getUserInputPurchaseMoney() {
    const USER_INPUT_PURCHASE_MONEY = await Console.readLineAsync(INPUT_MESSAGE.purchaseMoney);
    this.Validator.validateUserInputPurchaseMoney(Number(USER_INPUT_PURCHASE_MONEY));

    return Number(USER_INPUT_PURCHASE_MONEY);
  }

  async getUserInputWinningNumbers() {
    const USER_INPUT_WINNING_NUMBERS = await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
  }

  async getUserInputBonusNumber() {
    const USER_INPUT_BONUS_NUMBER = await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
  }
}

export default InputView;
