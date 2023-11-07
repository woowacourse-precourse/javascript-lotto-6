import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async read(query) {
    return await Console.readLineAsync(query);
  }

  static async readPurchaseAmount() {
    const input = await this.read('구입금액을 입력해 주세요.\n');
    const amount = Number(input);
    return amount;
  }
}
