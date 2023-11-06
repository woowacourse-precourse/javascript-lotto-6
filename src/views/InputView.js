import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GET } from '../constants/Message';
import InputController from '../controllers/InputController';
import ValidateController from '../controllers/ValidateController';

const InputView = {
  getPurchaseLottoAmount() {
    try {
      const inputAmountString = Console.readLineAsync(
        MESSAGE_GET.PURCHASE_AMOUNT,
      );
      const inputAmount = InputController.convertNumber(inputAmountString);
      ValidateController.validatePurchaseLottoAmount(inputAmount);
      return inputAmount;
    } catch (error) {
      Console.print(error.message);
      return undefined;
    }
  },

  getWinningNumbers() {
    try {
      const inputNumbersString = Console.readLineAsync(
        MESSAGE_GET.WINNING_NUMBER,
      );
      const inputNumbers = InputController.converList(inputNumbersString);
      ValidateController.validateWinningNumbers(inputNumbers);
      return inputNumbers;
    } catch (error) {
      Console.print(error.message);
      return undefined;
    }
  },

  getBonusNumber() {
    try {
      const inputNumberString = Console.readLineAsync(MESSAGE_GET.BONUS_NUMBER);
      const inputNumber = InputController.convertNumber(inputNumberString);
      return inputNumber;
    } catch (error) {
      Console.print(error.smessage);
      return undefined;
    }
  },
};

export default InputView;
