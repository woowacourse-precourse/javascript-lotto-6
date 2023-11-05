import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async getPurchaseAmount() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  static async getWinningNumbers() {
    return Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  }

  static async getBonusNumber() {
    return Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  }
}
