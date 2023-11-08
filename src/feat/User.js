import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "../validate/Validate.js";
class User {
  static PURCHASE_AMOUNT_MESSAGE = "구입금액을 입력해 주세요.\n";
  constructor() {
    this.validate = new Validate();
  }
  async purchaseAmount() {
    const userInputAmount = await Console.readLineAsync(
      User.PURCHASE_AMOUNT_MESSAGE,
    );
    Console.print("");
    if (this.validate.validatePurchaseAmount(userInputAmount)) {
      return userInputAmount;
    }
  }
}
export default User;
