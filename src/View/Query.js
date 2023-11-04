import { Console, Random } from '@woowacourse/mission-utils';
class Query {
  static async getPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n'
      );
      return purchaseAmount;
    } catch (error) {
      throw new Error('ERROR');
    }
  }

  static async getWinningNumber() {
    try {
      const winningNumber = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n'
      );
      return winningNumber;
    } catch (error) {
      throw new Error('ERROR');
    }
  }

  static async getBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n'
      );
      return bonusNumber;
    } catch (error) {
      throw new Error('ERROR');
    }
  }
}
export default Query;
