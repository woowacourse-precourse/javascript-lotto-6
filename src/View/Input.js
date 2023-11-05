import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/index.js';
import Validator from '../Validator/index.js';
import Output from './Output.js';

class Input {
  static async readAsync(query, validate, callback) {
    try {
      const answer = await Console.readLineAsync(query);
      validate(answer);
      return answer;
    } catch ({ message }) {
      Output.log(message);
      callback();
    }
  }

  static async readPurchaseAmount() {
    const PurchaseAmount = await this.readAsync(
      MESSAGE.askPurchaseAmount,
      Validator.validatePurchaseAmount,
      () => {
        this.readPurchaseAmount();
      },
    );
    return PurchaseAmount;
  }

  static async readWinningNumbers() {
    const winningNumber = await this.readAsync(
      MESSAGE.askWinningNumbers,
      Validator.validateWinningNumbers,
      () => {
        this.readWinningNumbers();
      },
    );
    return winningNumber;
  }

  static async readBonusNumber() {
    const lottoCount = await this.readAsync(
      MESSAGE.askBonusNumber,
      Validator.validateBonusNumber,
      () => {
        this.readBonusNumber();
      },
    );
    return lottoCount;
  }
}

export default Input;
