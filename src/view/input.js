import { Console } from '@woowacourse/mission-utils';
import { isEmpty, isPositiveInteger } from '../utils.js';
import { ERROR, LOTTO } from '../config.js';

const MESSAGE = Object.freeze({
  AMOUNT_TO_BUY: '구입금액을 입력해 주세요.\n',
});

export default class Input {
  static async amountToBuy() {
    let amount = '';
    try {
      amount = await Input.readTrimmedLineAsync(MESSAGE.AMOUNT_TO_BUY);

      if (isEmpty(amount)) throw new Error(ERROR.IS_EMPTY);
      if (!isPositiveInteger(amount)) throw new Error(ERROR.IS_NOT_INTEGER);
      if (amount < LOTTO.PRICE) throw new Error(ERROR.IS_LESS_THAN_LOTTO_PRICE);
      if (amount % LOTTO.PRICE !== 0) throw new Error(ERROR.IS_NOT_MULTIPLY_OF_LOTTO_PRICE);
    } catch (e) {
      Console.print(e.message);
      amount = await Input.amountToBuy();
    }
    return amount;
  }
  static async winningNumber() {}

  static async bonusNumber() {}
  static async readTrimmedLineAsync(message) {
    return Console.readLineAsync(message).then((input) => input.trim());
  }
}
