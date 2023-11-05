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
}

export default Input;
