import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, OTHERS } from '../../utils/constants.js';
import Validator from '../../Validator.js';

class InputView {
  constructor() {
    this.validator = new Validator();
  }

  async getUserInputPurchaseMoney() {
    const USER_INPUT_PURCHASE_MONEY = await Console.readLineAsync(
      `${INPUT_MESSAGE.purchaseMoney}${OTHERS.lineBreak}`
    );
    this.validator.validateUserInputPurchaseMoney(Number(USER_INPUT_PURCHASE_MONEY));

    return Number(USER_INPUT_PURCHASE_MONEY);
  }

  async getUserInputWinningNumbers() {
    const USER_INPUT_WINNING_NUMBERS = await Console.readLineAsync(
      `${INPUT_MESSAGE.winningNumbers}${OTHERS.lineBreak}`
    );
    this.validator.validateUserInputWinningNumbers(
      USER_INPUT_WINNING_NUMBERS.split(OTHERS.comma).map(Number)
    );

    return USER_INPUT_WINNING_NUMBERS.split(OTHERS.comma).map(Number);
  }

  async getUserInputBonusNumber(winningNumbers) {
    const USER_INPUT_BONUS_NUMBER = await Console.readLineAsync(
      `${OTHERS.lineBreak}${INPUT_MESSAGE.bonusNumber}${OTHERS.lineBreak}`
    );
    this.validator.validateUserInputBonusNumber(Number(USER_INPUT_BONUS_NUMBER), winningNumbers);

    return Number(USER_INPUT_BONUS_NUMBER);
  }
}

export default InputView;
