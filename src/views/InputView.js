import { Console } from '@woowacourse/mission-utils';
import {
  isValidAmount,
  isValidWinningNumbers,
  isValidBonusNumber,
} from '../Validation.js';
import { MESSAGE } from '../constants.js';
class InputView {
  #inputView;
  constructor() {}

  inputAmount = async () => {
    try {
      const amount = await Console.readLineAsync(MESSAGE.input.amount);
      if (!isValidAmount(amount)) throw new Error(MESSAGE.error.amount);
      return amount;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  };

  multiInputAmount = async () => {
    let amount;
    do {
      amount = await this.inputAmount();
    } while (!amount);
    return amount;
  };

  inputWinningNumbers = async () => {
    try {
      const winningNumbers = await Console.readLineAsync(
        MESSAGE.input.winningNumbers,
      );
      if (!isValidWinningNumbers(winningNumbers))
        throw new Error(MESSAGE.error.winningNumbers);
      return winningNumbers.split(',').map(x => Number(x));
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  };

  multiInputWinningNumbers = async () => {
    let winningNumbers;
    while (true) {
      winningNumbers = await this.inputWinningNumbers();
      if (Array.isArray(winningNumbers)) break;
    }
    return winningNumbers;
  };

  inputBonusNumber = async winningNumbers => {
    try {
      const bonusNumber = await Console.readLineAsync(
        MESSAGE.input.bonusNumber,
      );
      if (!isValidBonusNumber(winningNumbers, Number(bonusNumber)))
        throw new Error(MESSAGE.error.bonusNumber);
      return Number(bonusNumber);
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  };

  multiInputBonusNumber = async winningNumbers => {
    let bonusNumber;
    do {
      bonusNumber = await this.inputBonusNumber(winningNumbers);
    } while (!bonusNumber);
    return bonusNumber;
  };
}
export default InputView;
