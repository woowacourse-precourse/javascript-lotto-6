import { Console } from '@woowacourse/mission-utils';

const MESSAGE = Object.freeze({
  AMOUNT_TO_BUY: '구입금액을 입력해 주세요.\n',
});

export default class Input {
  static async amountToBuy() {}
  static async winningNumber() {}

  static async bonusNumber() {}
  static async readTrimmedLineAsync(message) {
    return Console.readLineAsync(message).then((input) => input.trim());
  }
}
