import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../Validator/inputValidator.js";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputView {
  static async getMoney() {
    const money = await Console.readLineAsync(INPUT_MESSAGE.getMoney);
    InputValidator.validateMoney(money);
    return money;
  }

  // 3-1. 당첨 번호를 입력 받는다.
  static async getLuckyNumbers() {
    const numbers = await Console.readLineAsync(INPUT_MESSAGE.getLuckyNumbers);
    const luckyNumbers = numbers.split(",").map((number) => Number(number));
    InputValidator.validateLuckyNumbers(luckyNumbers);
    return luckyNumbers;
  }

  // 3-2. 보너스 번호를 입력 받는다.
  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.getBonusNumber);
    InputValidator.validateBonusNumber(bonusNumber);
    return bonusNumber;
  }
}

export default InputView;