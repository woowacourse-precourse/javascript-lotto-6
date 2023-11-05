import { Console } from "@woowacourse/mission-utils";
import InputError from "../errors/InputError.js";

class UserInput {
  static validateAmount(input) {
    InputError.checkEmptyInputError(input);

    const inputToNumber = parseInt(input, 10);

    InputError.checkNumberError(inputToNumber);
    InputError.checkNagativeNumberError(inputToNumber);
    InputError.checkAmountInputError(inputToNumber);

    return inputToNumber;
  }

  static async getPurchaseAmount() {
    const lottoAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    const amount = this.validateAmount(lottoAmount);

    return amount;
  }

  static async getLottoNumbers() {
    const lottoNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    return lottoNumbers.split(",");
  }

  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    return bonusNumber;
  }
}

export default UserInput;
