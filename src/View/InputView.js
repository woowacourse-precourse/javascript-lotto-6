import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputView {
  static async getMoney() {
    const money = await Console.readLineAsync(INPUT_MESSAGE.getMoney);
    return money;
  }

  static async getLuckyNumbers() {
    const luckyNumbers = await Console.readLineAsync(INPUT_MESSAGE.getLuckyNumbers);
    return luckyNumbers;
  }

  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.getBonusNumber);
    return bonusNumber;
  }
}

export default InputView;