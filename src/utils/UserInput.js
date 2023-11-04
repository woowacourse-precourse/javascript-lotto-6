import { Console } from "@woowacourse/mission-utils";

class UserInput {
  static async getPurchaseAmount() {
    const lottoAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return lottoAmount;
  }
}

export default UserInput;
