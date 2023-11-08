import { Console } from "@woowacourse/mission-utils";
import { USER_INPUT , DELIMITER } from "../constants/constants.js";

import OutputView from "./outputView.js";

class InputView {
  static async inputLottoPrice() {
    const input = await Console.readLineAsync(USER_INPUT.LOTTO_PRICE);
    return Number(input);
  }

  static async inputTargetNumber() {
    OutputView.showEmptyLine();
    const input = await Console.readLineAsync(USER_INPUT.TARGET_NUMBER);
    return input.split(DELIMITER).map((number) => Number(number))
  }
 
  static async inputBonusNumber() {
    OutputView.showEmptyLine();
    const input = await Console.readLineAsync(USER_INPUT.BONUS_NUMBER);
    return Number(input);
  }
}

export default InputView;
