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

  static async readLotteryNumbers() {
    const input = await this.read('당첨 번호를 입력해 주세요.\n');
    const lotteryNumbers = input.split(',').map(Number);
    return lotteryNumbers;
  }
}
