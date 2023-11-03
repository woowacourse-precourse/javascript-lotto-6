import { Console, Random } from "@woowacourse/mission-utils";
class Query {
  static async getPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n'
      );
      return purchaseAmount;
    } catch (error) {
      throw new Error('ERROR')
    }
  }
}
export default Query