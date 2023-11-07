import { Console } from '@woowacourse/mission-utils';
import { isDuplicated, isEmpty, isPositiveInteger } from '../utils.js';
import { ERROR, LOTTO } from '../config.js';

const MESSAGE = Object.freeze({
  AMOUNT_TO_BUY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
});

export default class Input {
  static async amountToBuy() {
    let amount = '';
    try {
      amount = await Input.readTrimmedLineAsync(MESSAGE.AMOUNT_TO_BUY);
      if (isEmpty(amount)) throw new Error(ERROR.IS_EMPTY);
      if (!isPositiveInteger(amount)) throw new Error(ERROR.IS_NOT_POSITIVE_INTEGER);
      if (amount < LOTTO.PRICE) throw new Error(ERROR.IS_LESS_THAN_LOTTO_PRICE);
      if (amount % LOTTO.PRICE !== 0) throw new Error(ERROR.IS_NOT_MULTIPLY_OF_LOTTO_PRICE);
    } catch (e) {
      Console.print(e.message);
      amount = await Input.amountToBuy();
    }
    return amount;
  }
  static async winningNumber() {
    let winningNumber = '';
    try {
      winningNumber = await Input.readTrimmedLineAsync(MESSAGE.WINNING_NUMBER);
      if (isEmpty(winningNumber)) throw new Error(ERROR.IS_EMPTY);
      winningNumber = winningNumber.split(',').map((number) => number.trim());
      if (!winningNumber.every(isPositiveInteger)) throw new Error(ERROR.IS_NOT_POSITIVE_INTEGER);
      if (winningNumber.length !== LOTTO.COUNT) throw new Error(ERROR.IS_NOT_LOTTO_LENGTH);
      if (isDuplicated(winningNumber)) throw new Error(ERROR.IS_DUPLICATED);
      if (winningNumber.some((number) => number < LOTTO.RANGE.START || number > LOTTO.RANGE.END))
        throw new Error(ERROR.IS_NOT_IN_LOTTO_RANGE);
    } catch (e) {
      Console.print(e.message);
      winningNumber = await Input.winningNumber();
    }
    return winningNumber;
  }

  static async bonusNumber() {}
  static async readTrimmedLineAsync(message) {
    return Console.readLineAsync(message).then((input) => input.trim());
  }
}
