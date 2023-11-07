import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GET } from '../constants/Message';
import ValidateController from '../controllers/ValidateController';

const InputView = {
  async getPurchaseLottoAmount() {
    try {
      const inputAmountString = await Console.readLineAsync(MESSAGE_GET.PURCHASE_AMOUNT);
      return ValidateController.validatePurchaseLottoAmount(inputAmountString);
    } catch (error) {
      Console.print(error.message);
      return undefined;
    }
  },

  async getWinningNumbers() {
    try {
      const inputNumbersString = await Console.readLineAsync(MESSAGE_GET.WINNING_NUMBER);
      return ValidateController.validateWinningNumbers(inputNumbersString);
    } catch (error) {
      Console.print(error.message);
      return undefined;
    }
  },

  async getBonusNumber() {
    try {
      const inputNumberString = await Console.readLineAsync(MESSAGE_GET.BONUS_NUMBER);
      return ValidateController.validateBonusNumber(inputNumberString);
    } catch (error) {
      Console.print(error.smessage);
      return undefined;
    }
  },
};

export default InputView;
