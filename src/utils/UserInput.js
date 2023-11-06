import { Console } from "@woowacourse/mission-utils";
import InputError from "../errors/InputError.js";

class UserInput {
  static validateAmount(inputNumber) {
    InputError.checkEmpty(inputNumber);
    InputError.checkNonNumeric(inputNumber);

    const parsedInput = parseInt(inputNumber, 10);

    InputError.checkNagativeNumber(parsedInput);
    InputError.checkInvalidAmount(parsedInput);

    return parsedInput;
  }

  static validateEmptyLottoNumbers(inputNumberList) {
    InputError.checkEmpty(inputNumberList);
  }

  static validateBonusNumber(inputNumber) {
    InputError.checkEmpty(inputNumber);
    InputError.checkNonNumeric(inputNumber);

    const parsedInput = parseInt(inputNumber, 10);

    InputError.checkNagativeNumber(parsedInput);
    InputError.checkOutOfRangeNumber(parsedInput);

    return parsedInput;
  }

  static async getPurchaseAmount() {
    const lottoAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    const validatedAmount = this.validateAmount(lottoAmount);

    return validatedAmount;
  }

  static async getLottoNumbers() {
    const lottoNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    InputError.checkEmpty(lottoNumbers);

    return lottoNumbers.split(",").map(Number);
  }

  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    const validatedBonusNumber = this.validateBonusNumber(bonusNumber);

    return validatedBonusNumber;
  }
}

export default UserInput;
