import { Console } from "@woowacourse/mission-utils";
import InputValidate from "./InputValidate.js";

class UserInput {
  static async getUserInput(inputFunction) {
    let userInput;
    while (true) {
      try {
        userInput = await inputFunction();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return userInput;
  }

  static async getPurchaseAmount() {
    const lottoAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    const validatedAmount = InputValidate.validateAmount(lottoAmount);

    return validatedAmount;
  }

  static async getLottoNumbers() {
    const lottoNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    InputValidate.validateEmptyLottoNumbers(lottoNumbers);

    return lottoNumbers.split(",").map(Number);
  }

  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    const validatedBonusNumber = InputValidate.validateBonusNumber(bonusNumber);

    return validatedBonusNumber;
  }
}

export default UserInput;
