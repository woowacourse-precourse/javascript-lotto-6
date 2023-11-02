import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../Validator/inputValidator.js";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputView {
  static async getMoney() {
    const money = await Console.readLineAsync(INPUT_MESSAGE.getMoney);
    InputValidator.validateMoney(money);
    return money;
  }
}

export default InputView;