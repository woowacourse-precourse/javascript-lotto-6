import { Console, Random } from "@woowacourse/mission-utils";
class User {
  static PURCHASE_AMOUNT_MESSAGE = "구입금액을 입력해 주세요.\n";
  async purchaseAmount() {
    const userInputAmount = await Console.readLineAsync(
      User.PURCHASE_AMOUNT_MESSAGE,
    );
    return userInputAmount;
  }
}
export default User;
