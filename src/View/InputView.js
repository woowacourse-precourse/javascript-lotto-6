import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputView {
  static async getMoney() {
    const money = await Console.readLineAsync(INPUT_MESSAGE.getMoney);
    return money;
  }

  static async getLuckyNumbers() {
    const numbers = await Console.readLineAsync(INPUT_MESSAGE.getLuckyNumbers);
    const luckyNumbers = numbers.split(",").map((number) => Number(number));
    return luckyNumbers;
  }

  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.getBonusNumber);
    return Number(bonusNumber);
  }
}

export default InputView;