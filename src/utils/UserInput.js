import { Console } from "@woowacourse/mission-utils";
import InputError from "../errors/InputError.js";

class UserInput {
  static validateAmount(input) {
    InputError.checkEmpty(input);
    InputError.checkNonNumeric(input);

    const inputToNumber = parseInt(input, 10);

    InputError.checkNagativeNumber(inputToNumber);
    InputError.checkInvalidAmount(inputToNumber);

    return inputToNumber;
  }

  static validateEmptyLottoNumbers(input) {
    InputError.checkEmpty(input);
  }

  static validateBonusNumber(input) {
    InputError.checkEmpty(input);
    InputError.checkNonNumeric(input);

    const inputToNumber = parseInt(input, 10);

    InputError.checkNagativeNumber(inputToNumber);
    InputError.checkOutOfRangeNumber(inputToNumber);

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

    InputError.checkEmpty(lottoNumbers);

    return lottoNumbers.split(",").map(Number);
  }

  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    const validateNumber = this.validateBonusNumber(bonusNumber);

    return validateNumber;
  }
}

export default UserInput;
