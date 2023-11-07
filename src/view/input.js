import { Console } from '@woowacourse/mission-utils';
import { isEmpty, isInteger } from '../utils.js';

const MESSAGE = Object.freeze({
  AMOUNT_TO_BUY: '구입금액을 입력해 주세요.\n',
});

export default class Input {
  static async amountToBuy() {
    let amount = '';

    try {
      amount = await Input.readTrimmedLineAsync(MESSAGE.AMOUNT_TO_BUY);
      if (isEmpty(amount)) throw new Error('값을 입력해주세요.');
      if (!isInteger(amount)) throw new Error('정수를 입력해주세요.');
    } catch (e) {
      Console.print(e.message);
      await Input.amountToBuy();
    }

    return amount;
  }
  static async winningNumber() {}

  static async bonusNumber() {}
  static async readTrimmedLineAsync(message) {
    return Console.readLineAsync(message).then((input) => input.trim());
  }
}
