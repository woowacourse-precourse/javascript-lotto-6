import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async read(query) {
    return await Console.readLineAsync(query);
  }

  static async readPurchaseMoney() {
    const input = await this.read('구입금액을 입력해 주세요.\n');
    const amount = Number(input);
    return amount;
  }

  static async readLotteryNumbers() {
    const input = await this.read('\n당첨 번호를 입력해 주세요.\n');
    const lotteryNumbers = input.split(',').map(Number);
    return lotteryNumbers;
  }

  static async readBonusNumber() {
    const input = await this.read('\n보너스 번호를 입력해 주세요.\n');
    const bonusNumber = Number(input);
    return bonusNumber;
  }
}
