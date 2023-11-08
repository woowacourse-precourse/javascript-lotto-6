import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../Constants.js";

class InputView {
  static async lottoMoney() {
    return await Console.readLineAsync(INPUT_MESSAGE.LOTTO_MONEY);
  }

  static async winNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGE.WIN_NUMBERS);
  }
  static async bonusNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }
}

export default InputView;
