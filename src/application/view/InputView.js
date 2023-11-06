import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, OTHERS } from '../../utils/constants.js';
import Validator from '../../Validator.js';

class InputView {
  constructor() {
    this.validator = new Validator();
  }

  async getUserInputPurchaseMoney() {
    const USER_INPUT_PURCHASE_MONEY = await Console.readLineAsync(INPUT_MESSAGE.purchaseMoney);
    this.validator.validateUserInputPurchaseMoney(Number(USER_INPUT_PURCHASE_MONEY));

    return Number(USER_INPUT_PURCHASE_MONEY);
  }

  async getUserInputWinningNumbers() {
    const USER_INPUT_WINNING_NUMBERS = await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
    this.validator.validateUserInputWinningNumbers(
      USER_INPUT_WINNING_NUMBERS.split(OTHERS.comma).map(Number)
    );

    return USER_INPUT_WINNING_NUMBERS.split(OTHERS.comma).map(Number);
  }

  async getUserInputBonusNumber() {
    const USER_INPUT_BONUS_NUMBER = await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
  }
}

export default InputView;
