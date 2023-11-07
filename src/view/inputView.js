import { Console } from "@woowacourse/mission-utils";
import { USER_INPUT , DELIMITER } from "../constants/constants.js";

class InputView {
  static async inputLottoPrice() {
    const input = await Console.readLineAsync(USER_INPUT.LOTTO_PRICE);
    return Number(input);
  }

  static async inputTargetNumber() {
    const input = await Console.readLineAsync(USER_INPUT.TARGET_NUMBER);
    return input.split(DELIMITER).map((number) => Number(number))
  }
 
  static async inputBonusNumber() {
    const input = await Console.readLineAsync(USER_INPUT.BONUS_NUMBER);
    return Number(input);
  }
}

export default InputView;
