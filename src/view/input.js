import { Console } from '@woowacourse/mission-utils';
import { isEmpty, isPositiveInteger } from '../utils.js';
import { ERROR, LOTTO, WINNING_NUMBER_DELIMITER } from '../config.js';
import WinningLotto from '../WinningLotto.js';

const MESSAGE = Object.freeze({
  AMOUNT_TO_BUY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export default class Input {
  static async amountToBuy() {
    let amount;
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
    return Number(amount);
  }
  static async winningNumbers() {
    let winningLotto;
    try {
      let winningNumbers = await Input.readTrimmedLineAsync(MESSAGE.WINNING_NUMBER);
      winningNumbers = winningNumbers
        .split(WINNING_NUMBER_DELIMITER)
        .filter((number) => !isEmpty(number))
        .map((number) => Number(number));
      winningLotto = new WinningLotto(winningNumbers);
    } catch (e) {
      Console.print(e.message);
      winningLotto = await Input.winningNumbers();
    }
    return winningLotto;
  }

  static async bonusNumber(winningLotto) {
    try {
      const bonusNumber = await Input.readTrimmedLineAsync(MESSAGE.BONUS_NUMBER);
      if (isEmpty(bonusNumber)) throw new Error(ERROR.IS_EMPTY);
      winningLotto.setBonusNumber(bonusNumber);
    } catch (e) {
      Console.print(e.message);
      await Input.bonusNumber(winningLotto);
    }
  }
  static async readTrimmedLineAsync(message) {
    return Console.readLineAsync(message).then((input) => input.trim());
  }
}
