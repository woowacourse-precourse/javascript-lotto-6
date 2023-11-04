import { Console } from "@woowacourse/mission-utils";

class UserInput {
  static async getPurchaseAmount() {
    const lottoAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return lottoAmount;
  }

  static async getLottoNumbers() {
    const lottoNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    return lottoNumbers.split(",");
  }
}

export default UserInput;
